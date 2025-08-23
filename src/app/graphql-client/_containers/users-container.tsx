"use client";

import { useSuspenseQuery } from "@apollo/client/react";
import type { JSX } from "react";
import { GetUsersDocument, type GetUsersQuery } from "~/graphql/generated/graphql";
import { UserList } from "~/app/graphql-client/_components/user-list";

export function UsersContainer(): JSX.Element {
	const { data } = useSuspenseQuery<GetUsersQuery>(GetUsersDocument);

	return <UserList users={data?.users || []} />;
}