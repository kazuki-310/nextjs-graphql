import type { JSX } from "react";

export default function Loading(): JSX.Element {
	return (
		<div className="space-y-4">
			<div className="rounded bg-green-100 p-4">
				<div className="flex items-center space-x-2">
					<div className="h-4 w-4 animate-spin rounded-full border-2 border-green-600 border-t-transparent" />
					<p className="font-semibold text-green-800">データを取得中...</p>
				</div>
			</div>
		</div>
	);
}
