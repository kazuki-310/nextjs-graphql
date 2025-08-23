import type { JSX } from "react";
import { Suspense } from "react";
import {
	LoadingPosts,
	LoadingUsers,
} from "~/app/graphql-multi-request/_components/loading";
import { PostsContainer } from "~/app/graphql-multi-request/_containers/posts-container";
import { UsersContainer } from "~/app/graphql-multi-request/_containers/users-container";

export default function GraphQlMultiRequestPage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Multi Request (Server Component)
			</h1>

			<div className="mb-6 rounded bg-green-100 p-4">
				<p className="font-semibold text-green-800">✅ 複数クエリ実行完了</p>
				<p className="text-green-600 text-sm">
					Promise.allで並行実行 + React.cacheによる重複排除
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Suspense fallback={<LoadingUsers />}>
					<UsersContainer />
				</Suspense>

				<Suspense fallback={<LoadingPosts />}>
					<PostsContainer />
				</Suspense>
			</div>
		</div>
	);
}
