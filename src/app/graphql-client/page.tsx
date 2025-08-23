"use client";

import { type JSX, Suspense } from "react";
import { UsersContainer } from "~/app/graphql-client/_containers/users-container";

export default function GraphQlClientPage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">GraphQL Client Component</h1>

			<div className="mb-6 rounded bg-green-100 p-4">
				<p className="font-semibold text-green-800">⚡ Client Component</p>
				<p className="text-green-600 text-sm">
					useSuspenseQuery + Suspenseでローディング状態を管理
				</p>
			</div>

			<Suspense fallback={<LoadingFallback />}>
				<UsersContainer />
			</Suspense>
		</div>
	);
}

function LoadingFallback(): JSX.Element {
	return (
		<div className="rounded bg-blue-100 p-4">
			<div className="flex items-center space-x-2">
				<div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
				<p className="font-semibold text-blue-800">データを取得中...</p>
			</div>
		</div>
	);
}
