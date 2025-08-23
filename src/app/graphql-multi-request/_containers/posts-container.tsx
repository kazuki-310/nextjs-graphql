import type { JSX } from "react";
import { PostList } from "~/app/graphql-multi-request/_components/post-list";
import {
	GetPostsDocument,
	type GetPostsQuery,
} from "~/graphql/generated/graphql";
import { getClient } from "~/lib/apollo-client";

export async function PostsContainer(): Promise<JSX.Element> {
	const { data, error } = await getClient().query<GetPostsQuery>({
		query: GetPostsDocument,
		fetchPolicy: "no-cache",
	});

	if (error) {
		throw new Error(`投稿データの取得に失敗しました: ${error.message}`);
	}

	return <PostList posts={data?.posts || []} />;
}
