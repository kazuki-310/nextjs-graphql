"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";
import { cn } from "~/lib/utils";

type NavigationLink = {
	href: Route;
	label: string;
};

const NAVIGATION_LINKS: NavigationLink[] = [
	{ href: "/graphql-single-request", label: "Single Request" },
	{ href: "/graphql-multi-request", label: "Multi Request" },
	{ href: "/graphql-cache-option", label: "Cache Option" },
];

export function Sidebar(): JSX.Element {
	const pathname = usePathname();

	return (
		<aside className="w-64 bg-gray-100 p-6">
			<Link href="/">
				<h1 className="mb-8 font-bold text-xl">GraphQL Demo</h1>
			</Link>

			<nav>
				<ul className="space-y-3">
					{NAVIGATION_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={cn(
									"block rounded px-3 py-2",
									pathname === link.href
										? "bg-blue-50 text-blue-600"
										: "text-gray-700 hover:bg-gray-200",
								)}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
