import "~/css/globals.css";

export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
