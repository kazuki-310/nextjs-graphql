import type { JSX } from "react";

export function LoadingCacheOptions(): JSX.Element {
	return (
		<div className="rounded bg-purple-100 p-4">
			<div className="flex items-center space-x-2">
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-600 border-t-transparent" />
				<p className="font-semibold text-purple-800">キャッシュからデータを取得中...</p>
			</div>
		</div>
	);
}