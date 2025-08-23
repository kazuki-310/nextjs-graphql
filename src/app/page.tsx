import type { JSX } from "react";

export default function Page(): JSX.Element {
	return (
		<div className="flex h-full items-center justify-center">
			<div className="text-center">
				<h2 className="mb-4 font-bold text-3xl text-gray-800">
					GraphQL + Apollo RSC DEMO
				</h2>
				<p className="text-gray-600 text-lg">
					左のサイドバーから各種パターンを確認できます 👈
				</p>
			</div>
		</div>
	);
}
