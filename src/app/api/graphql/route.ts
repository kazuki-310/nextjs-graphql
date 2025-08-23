import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextRequest } from "next/server";
import type { Post, User } from "~/graphql/generated/graphql";

const typeDefs = readFileSync(
	join(process.cwd(), "src/graphql/schema.graphql"),
	"utf-8",
);

// サンプルデータ
const users = [
	{
		id: "1",
		name: "John Doe",
		email: "john@example.com",
		createdAt: "2024-01-01",
	},
	{
		id: "2",
		name: "Jane Smith",
		email: "jane@example.com",
		createdAt: "2024-01-02",
	},
];

const posts = [
	{
		id: "1",
		title: "Hello World",
		content: "First post content",
		authorId: "1",
		createdAt: "2024-01-01",
	},
	{
		id: "2",
		title: "GraphQL with Next.js",
		content: "Learn GraphQL",
		authorId: "2",
		createdAt: "2024-01-02",
	},
];

// リゾルバー定義
const resolvers = {
	Query: {
		users: async (): Promise<User[]> => {
			// 1秒の遅延を追加（ローディング状態を確認するため）
			await new Promise<void>((resolve) => setTimeout(resolve, 1000));
			return users;
		},
		user: async (
			_: unknown,
			args: { id: string },
		): Promise<User | undefined> => {
			await new Promise<void>((resolve) => setTimeout(resolve, 500));
			return users.find((user) => user.id === args.id);
		},
		posts: async (): Promise<Post[]> => {
			await new Promise<void>((resolve) => setTimeout(resolve, 1500));
			return posts.map((post) => ({
				...post,
				author: users.find((user) => user.id === post.authorId) as User,
			}));
		},
		post: async (_: unknown, args: { id: string }): Promise<Post | null> => {
			await new Promise<void>((resolve) => setTimeout(resolve, 500));
			const post = posts.find((p) => p.id === args.id);
			if (!post) {
				return null;
			}
			return {
				...post,
				author: users.find((user) => user.id === post.authorId) as User,
			};
		},
	},
	Mutation: {
		createUser: (_: unknown, args: { name: string; email: string }): User => {
			const newUser: User = {
				id: String(users.length + 1),
				name: args.name,
				email: args.email,
				createdAt: new Date().toISOString().split("T")[0],
			};
			users.push(newUser);
			return newUser;
		},
		createPost: async (
			_: unknown,
			args: { title: string; content: string; authorId: string },
		): Promise<Post> => {
			const author = users.find((user) => user.id === args.authorId);
			if (!author) {
				throw new Error("Author not found");
			}

			const newPost = {
				id: String(posts.length + 1),
				title: args.title,
				content: args.content,
				authorId: args.authorId,
				createdAt: new Date().toISOString().split("T")[0],
			};
			posts.push(newPost);

			return {
				id: newPost.id,
				title: newPost.title,
				content: newPost.content,
				createdAt: newPost.createdAt,
				author,
			};
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
	context: async (req: NextRequest): Promise<{ req: NextRequest }> => ({ req }),
});

export async function GET(request: NextRequest): Promise<Response> {
	return await handler(request);
}

export async function POST(request: NextRequest): Promise<Response> {
	return await handler(request);
}
