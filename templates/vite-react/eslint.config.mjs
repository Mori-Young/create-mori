import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * 使用eslint v9 , 确保VSCode的eslint插件版本高于3.0.5
 * 此外，还需要在用户settings.json中设置👇
 * ! "eslint.useFlatConfig": true
 */
/** @type {import('eslint').Linter.Config[]} */
export default [
    { ignores: ["dist", "node_modules", "package.json"] },
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
];
