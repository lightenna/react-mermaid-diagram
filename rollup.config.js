// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/esm/index.js",
                format: "esm",
                esModule: true,
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
            }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            postcss(),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];