import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/client-integration-nextjs";
import { env } from "~/env.mjs";

// In RSC
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: env.NEXT_PUBLIC_API_URL,
			// fetchOptions: { cache: "no-store" } // キャッシュ制御オプション
		}),
	});
});

// In Client Components and streaming SSR
// CC で streaming SSR 使う場合は以下の設定が必要
export function makeClient(): ApolloClient {
	const httpLink = new HttpLink({
		uri: env.NEXT_PUBLIC_API_URL,
		fetchOptions: {},
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
	});
}
