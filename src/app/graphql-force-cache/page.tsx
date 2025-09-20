import { type JSX, Suspense } from "react";
import { UsersContainer } from "~/app/graphql-force-cache/_containers/users-container";
import Loading from "~/app/graphql-force-cache/loading";

export default function GraphQlForceCachePage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Force Cache (Server Component)
			</h1>

			<Suspense fallback={<Loading />}>
				<UsersContainer />
			</Suspense>
		</div>
	);
}
