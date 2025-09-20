"use client";

import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { env } from "~/env.mjs";

const client = new ApolloClient({
	link: new HttpLink({ uri: env.NEXT_PUBLIC_API_URL }),
	cache: new InMemoryCache(),
});

export function ClientApolloProvider({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
