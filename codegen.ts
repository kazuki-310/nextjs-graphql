import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "src/graphql/schema.graphql",
	documents: "src/**/*.ts",
	generates: {
		"src/graphql/generated/": {
			config: {
				nonOptionalTypename: true,
				skipTypename: true,
			},
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
		},
	},
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default config;
