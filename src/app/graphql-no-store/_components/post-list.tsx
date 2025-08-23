import type { JSX } from "react";
import type { GetPostsQuery } from "~/graphql/generated/graphql";

type PostListProps = {
	posts: GetPostsQuery["posts"];
};

export function PostList({ posts }: PostListProps): JSX.Element {
	return (
		<div className="rounded bg-gray-50 p-4">
			<h2 className="mb-2 font-semibold">投稿一覧:</h2>
			<pre className="overflow-x-auto text-sm">
				{JSON.stringify({ posts }, null, 2)}
			</pre>
		</div>
	);
}