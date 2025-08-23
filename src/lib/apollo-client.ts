import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import { env } from "~/env.mjs";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: env.NEXT_PUBLIC_API_URL,
			// fetchOptions: { cache: "no-store" } // キャッシュ制御オプション
		}),
	});
});
