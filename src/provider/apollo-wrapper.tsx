"use client";
import { env } from "~/env.mjs";

import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from "@apollo/client-integration-nextjs";
import type { JSX } from "react";

function makeClient(): ApolloClient {
	const httpLink = new HttpLink({
		uri: env.NEXT_PUBLIC_API_URL,
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
