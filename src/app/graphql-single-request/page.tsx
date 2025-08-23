import { type JSX, Suspense } from "react";
import { LoadingSingleRequest } from "~/app/graphql-single-request/_components/loading";
import { UsersContainer } from "~/app/graphql-single-request/_containers/users-container";

export default function GraphQlSingleRequestPage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Single Request (Server Component)
			</h1>

			<Suspense fallback={<LoadingSingleRequest />}>
				<UsersContainer />
			</Suspense>
		</div>
	);
}
