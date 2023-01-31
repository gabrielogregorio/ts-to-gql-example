import { ApolloServer } from '@apollo/server';
import { resolvers } from '@/graphql/resolvers/resolvers';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser, { json } from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import { searchGqlSchemaAndBuild } from 'ts-to-gql';
import fsNode from 'fs';

const getGraphqlSchema = (): string => fsNode.readFileSync('./schema.graphql', 'utf8').toString();

const port = 4000;

const app = express();

app.use(cors(), bodyParser.json());
app.disable('x-powered-by');
app.use(express.static('public'));

const httpServer = http.createServer(app);

interface ContextToken {
  token?: String;
}

// ============= TS-TO-GQL =========== START
searchGqlSchemaAndBuild({
  isProduction: false,
  pathScanProject: './src',
  pathSaveSchema: './schema.graphql',
  prefixModel: 'GqlModel',
  prefixMutation: 'GqlMutation',
  prefixQuery: 'GqlQuery',
  removePrefixFromSchema: true,
  fixSchema: (schemaGql: string): string => schemaGql,
});
// ============= TS-TO-GQL =========== END

const server = new ApolloServer<ContextToken>({
  resolvers,
  typeDefs: getGraphqlSchema(),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(() => {
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  httpServer.listen({ port }, () => {
    console.log(`api is running in http://localhost:${port}/ 🚀`);
  });
});
