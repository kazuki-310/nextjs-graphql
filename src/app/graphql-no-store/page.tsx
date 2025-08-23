import type { JSX } from "react";
import { Suspense } from "react";
import {
	LoadingPosts,
	LoadingUsers,
} from "~/app/graphql-no-store/_components/loading";
import { PostsContainer } from "~/app/graphql-no-store/_containers/posts-container";
import { UsersContainer } from "~/app/graphql-no-store/_containers/users-container";

export default function GraphQlNoCachePage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL No Cache (Server Component)
			</h1>

			<div className="mb-4 space-y-2 text-sm">
				<div className="rounded border-yellow-400 border-l-4 bg-yellow-50 p-3">
					<p>
						<strong>キャッシュ設定:</strong>
					</p>
					<ul className="mt-2 ml-4 space-y-1">
						<li>
							• <code>cache: "no-store"</code> - キャッシュしない
						</li>
					</ul>
				</div>
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
