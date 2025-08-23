import type { JSX } from "react";
import type { GetUsersQuery } from "~/graphql/generated/graphql";

type UserListProps = {
	users: GetUsersQuery["users"];
};

export function UserList({ users }: UserListProps): JSX.Element {
	return (
		<>
			<div className="mb-6 rounded bg-purple-100 p-4">
				<p className="font-semibold text-purple-800">
					🔄 キャッシュ戦略適用済み
				</p>
				<p className="text-purple-600 text-sm">
					cache: "force-cache" + revalidate: 10秒
				</p>
			</div>

			<div className="mb-4 space-y-2 text-sm">
				<div className="rounded border-yellow-400 border-l-4 bg-yellow-50 p-3">
					<p>
						<strong>キャッシュ設定:</strong>
					</p>
					<ul className="mt-2 ml-4 space-y-1">
						<li>
							• <code>cache: "force-cache"</code> - 積極的キャッシュ利用
						</li>
						<li>
							• <code>revalidate: 10</code> - 10秒間隔で自動再検証
						</li>
					</ul>
				</div>
			</div>

			<div className="rounded bg-gray-50 p-4">
				<h2 className="mb-2 font-semibold">取得データ:</h2>
				<pre className="overflow-x-auto text-sm">
					{JSON.stringify({ users }, null, 2)}
				</pre>
			</div>

			<div className="mt-6 text-gray-600 text-sm">
				<p>
					このページを連続でリロードすると、最初の10秒間はキャッシュされたデータが表示されます。
					10秒後に自動的に再検証が実行されます。
				</p>
			</div>
		</>
	);
}
