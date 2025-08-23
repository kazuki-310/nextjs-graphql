import { type JSX } from "react";

export default function GraphQlSingleRequestPage(): JSX.Element {
	return (
		<div>
			<h1 className="mb-6 font-bold text-2xl">
				GraphQL Single Request (Server Component)
			</h1>

			{/* <Suspense fallback={<LoadingSingleRequest />}>
				<UsersContainer />
			</Suspense> */}
		</div>
	);
}
