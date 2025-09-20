import "~/css/globals.css";
import { Sidebar } from "~/components/layouts/sidebar";
import { ClientApolloProvider } from "~/providers/apollo-provider";

export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>
				<ClientApolloProvider>
					<div className="flex h-screen">
						<Sidebar />
						<main className="flex-1 p-8">{children}</main>
					</div>
				</ClientApolloProvider>
			</body>
		</html>
	);
}
