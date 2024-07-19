// @ts-check
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { builtinModules } from "module";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    exports: "auto",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
  ],
  external: [
    ...builtinModules,
    ...builtinModules.map((module) => `node:${module}`),
  ],
}
