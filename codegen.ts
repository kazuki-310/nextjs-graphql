import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "src/graphql/schema.graphql",
	documents: "src/graphql/**/*.graphql",
	generates: {
		"src/graphql/generated/": {
			preset: "client",
			plugins: [],
			config: {
				useTypeImports: true,
			},
		},
	},
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default config;
