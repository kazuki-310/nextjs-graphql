import { type JSX, Suspense } from "react";
import { LoadingCacheOptions } from "~/app/graphql-cache-option/_components/loading";
import { UsersContainer } from "~/app/graphql-cache-option/_containers/users-container";

export default function GraphQlCacheOptionPage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Cache Option (Server Component)
			</h1>

			<Suspense fallback={<LoadingCacheOptions />}>
				<UsersContainer />
			</Suspense>
		</div>
	);
}
