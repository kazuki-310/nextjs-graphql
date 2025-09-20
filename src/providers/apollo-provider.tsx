"use client";

import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { env } from "~/env.mjs";

const getApiUrl = (): string => {
	if (
		typeof window !== "undefined" &&
		window.location.hostname === "localhost"
	) {
		return "http://localhost:3000/api/graphql";
	}

	return env.NEXT_PUBLIC_API_URL;
};

const client = new ApolloClient({
	link: new HttpLink({
		uri: getApiUrl(),
		fetchOptions: {
			mode: "cors",
			credentials: "include",
		},
	}),
	cache: new InMemoryCache(),
});

export function ClientApolloProvider({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
