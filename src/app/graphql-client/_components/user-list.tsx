import type { JSX } from "react";
import type { GetUsersQuery } from "~/graphql/generated/graphql";

type UserListProps = {
	users: GetUsersQuery["users"];
};

export function UserList({ users }: UserListProps): JSX.Element {
	return (
		<div className="rounded bg-gray-50 p-4">
			<h2 className="mb-2 font-semibold">取得データ:</h2>
			<pre className="overflow-x-auto text-sm">
				{JSON.stringify({ users }, null, 2)}
			</pre>
		</div>
	);
}