"use client";

import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from "@apollo/client-integration-nextjs";
import type { JSX } from "react";

function makeClient(): ApolloClient {
	const httpLink = new HttpLink({
		uri: "http://localhost:3000/api/graphql",
	});

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
	});
}

export function ApolloWrapper({
	children,
}: React.PropsWithChildren): JSX.Element {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
