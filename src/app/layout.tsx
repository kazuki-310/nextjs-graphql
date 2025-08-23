import "~/css/globals.css";
import { Sidebar } from "~/components/layouts/sidebar";

export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>
				<div className="flex h-screen">
					<Sidebar />
					<main className="flex-1 p-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
