import type { JSX } from "react";

export function UsersLoading(): JSX.Element {
	return (
		<div className="rounded bg-blue-100 p-4">
			<div className="flex items-center space-x-2">
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
				<p className="font-semibold text-blue-800">
					ユーザーデータを読み込み中...
				</p>
			</div>
		</div>
	);
}
