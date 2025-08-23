import "~/css/globals.css";
import { Sidebar } from "~/components/layouts/sidebar";
import { ApolloWrapper } from "~/provider/apollo-wrapper";

export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>
				<ApolloWrapper>
					<div className="flex h-screen">
						<Sidebar />
						<main className="flex-1 p-8">{children}</main>
					</div>
				</ApolloWrapper>
			</body>
		</html>
	);
}
