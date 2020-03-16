import path from 'path';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';

function getResolvers() {
    return [path.resolve(__dirname + '/resolvers/*.ts')];
}

async function getSchema() {
    return buildSchema({
        resolvers: getResolvers()
    });
}

export async function integrateGraphql(app: Koa<Koa.DefaultState, Koa.DefaultContext>) {
    const server = new ApolloServer({
        schema: await getSchema(),
        playground: {
            settings: {
                'request.credentials': 'include'
            }
        } as any,
        introspection: true,
        context: ({ ctx }) => ctx
    });
    server.applyMiddleware({ app });
    return server;
}
