import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: "http://localhost:3000/api/graphql",
			// fetchOptions: { cache: "no-store" } // キャッシュ制御オプション
		}),
	});
});
