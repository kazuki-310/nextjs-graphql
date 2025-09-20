"use client";

import { useQuery } from "@apollo/client/react";
import type { JSX } from "react";
import { GET_USERS } from "~/app/_lib/users";
import type {
	GetUsersQuery,
	GetUsersQueryVariables,
} from "~/graphql/generated/graphql";

export default function Page(): JSX.Element {
	const { loading, error, data } = useQuery<
		GetUsersQuery,
		GetUsersQueryVariables
	>(GET_USERS);

	if (loading) {
		return (
			<div className="rounded bg-blue-100 p-4">
				<div className="flex items-center space-x-2">
					<div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
					<p className="font-semibold text-blue-800">
						クライアントサイドでデータを取得中...
					</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="rounded bg-red-100 p-4">
				<p className="font-semibold text-red-800">エラー: {error.message}</p>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="rounded-lg bg-blue-50 p-6">
				<h1 className="mb-4 font-bold text-2xl text-blue-900">
					Client Side Fetch Demo
				</h1>
				<p className="text-blue-700">
					このページは useQuery 使ってクライアントサイドでデータを取得します。
				</p>
			</div>

			<div className="space-y-4">
				<h2 className="font-semibold text-xl">ユーザー一覧</h2>
				{data?.users.map((user) => (
					<div key={user.id} className="rounded border bg-white p-4 shadow">
						<h3 className="font-semibold">{user.name}</h3>
						<p className="text-gray-600">{user.email}</p>
						<p className="text-gray-500 text-sm">
							作成日: {new Date(user.createdAt).toLocaleDateString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
