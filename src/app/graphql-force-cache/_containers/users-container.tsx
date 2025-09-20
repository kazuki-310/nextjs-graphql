import type { JSX } from "react";
import { UserList } from "~/app/graphql-force-cache/_components/user-list";
import {
	GetUsersDocument,
	type GetUsersQuery,
} from "~/graphql/generated/graphql";
import { query } from "~/lib/apollo-client";

export async function UsersContainer(): Promise<JSX.Element> {
	const { data, error } = await query<GetUsersQuery>({
		query: GetUsersDocument,
		context: {
			fetchOptions: {
				cache: "force-cache",
			},
		},
	});

	if (error) {
		throw new Error(`ユーザーデータの取得に失敗しました: ${error.message}`);
	}

	return <UserList users={data?.users || []} />;
}
