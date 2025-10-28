// @ts-check
import { builtinModules } from "node:module";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
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
    replace({
      "globalThis.BROADCAST_MESSAGE": JSON.stringify({ message: "Hello, World!" }),
    }),
  ],
  external: [
    ...builtinModules,
    ...builtinModules.map((module) => `node:${module}`),
  ],
};
