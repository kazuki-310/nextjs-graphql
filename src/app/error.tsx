"use client";

import type { JSX } from "react";

type ErrorProps = {
	error: Error & { digest?: string };
	reset?: () => void;
};

export default function Error({ error, reset }: ErrorProps): JSX.Element {
	return (
		<div className="flex min-h-[400px] flex-col items-center justify-center rounded bg-red-50 p-8">
			<div className="text-center">
				<div className="mb-4 text-6xl text-red-600">⚠️</div>
				<h2 className="mb-4 font-bold text-2xl text-red-800">
					エラーが発生しました
				</h2>
				<p className="mb-6 text-red-600">
					申し訳ございません。予期しないエラーが発生しました。
				</p>

				<details className="mb-6 rounded bg-red-100 p-4 text-left">
					<summary className="cursor-pointer font-semibold text-red-800">
						エラー詳細
					</summary>
					<pre className="mt-2 overflow-auto text-red-700 text-sm">
						{error.message}
					</pre>
				</details>

				{reset && (
					<button
						type="button"
						onClick={reset}
						className="rounded bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700"
					>
						再試行
					</button>
				)}
			</div>
		</div>
	);
}
