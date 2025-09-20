import type { JSX } from "react";
import { PostList } from "~/app/graphql-no-store/_components/post-list";
import {
	GetPostsDocument,
	type GetPostsQuery,
} from "~/graphql/generated/graphql";
import { query } from "~/lib/apollo-client";

export async function PostsContainer(): Promise<JSX.Element> {
	const { data, error } = await query<GetPostsQuery>({
		query: GetPostsDocument,
		context: {
			fetchOptions: {
				cache: "no-store",
			},
		},
	});

	if (error) {
		throw new Error(`投稿データの取得に失敗しました: ${error.message}`);
	}

	return <PostList posts={data?.posts || []} />;
}
