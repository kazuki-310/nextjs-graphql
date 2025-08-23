import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

export const getGraphQlUrl = (): string => {
	return (
		process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:3000/api/graphql"
	);
};

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: getGraphQlUrl(),
			// fetchOptions: { cache: "no-store" } // キャッシュ制御オプション
		}),
	});
});
