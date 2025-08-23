import type { JSX } from "react";
import { UserList } from "~/app/graphql-multi-request/_components/user-list";
import {
	GetUsersDocument,
	type GetUsersQuery,
} from "~/graphql/generated/graphql";
import { getClient } from "~/lib/apollo-client";

export async function UsersContainer(): Promise<JSX.Element> {
	const { data, error } = await getClient().query<GetUsersQuery>({
		query: GetUsersDocument,
	});

	if (error) {
		throw new Error(`ユーザーデータの取得に失敗しました: ${error.message}`);
	}

	return <UserList users={data?.users || []} />;
}
