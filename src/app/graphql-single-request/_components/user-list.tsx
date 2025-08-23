import type { JSX } from "react";
import type { GetUsersQuery } from "~/graphql/generated/graphql";

type UserListProps = {
	users: GetUsersQuery["users"];
};

export function UserList({ users }: UserListProps): JSX.Element {
	return (
		<>
			<div className="mb-4 rounded bg-blue-100 p-4">
				<p className="font-semibold text-blue-800">✅ データ取得完了</p>
				<p className="text-blue-600 text-sm">
					Server Componentで単一のGraphQLクエリを実行
				</p>
			</div>

			<div className="rounded bg-gray-50 p-4">
				<h2 className="mb-2 font-semibold">取得データ:</h2>
				<pre className="overflow-x-auto text-sm">
					{JSON.stringify({ users }, null, 2)}
				</pre>
			</div>
		</>
	);
}
