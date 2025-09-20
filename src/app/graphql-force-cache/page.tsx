import { type JSX, Suspense } from "react";
import { UsersLoading } from "~/app/_components/users-loading";
import { UsersContainer } from "~/app/graphql-force-cache/_containers/users-container";

export default function GraphQlForceCachePage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Force Cache (Server Component)
			</h1>

			<Suspense fallback={<UsersLoading />}>
				<UsersContainer />
			</Suspense>
		</div>
	);
}
