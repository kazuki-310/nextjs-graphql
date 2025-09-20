import type { JSX } from "react";

export function PostsLoading(): JSX.Element {
	return (
		<div className="rounded bg-green-100 p-4">
			<div className="flex items-center space-x-2">
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-green-600 border-t-transparent" />
				<p className="font-semibold text-green-800">
					投稿データを読み込み中...
				</p>
			</div>
		</div>
	);
}
