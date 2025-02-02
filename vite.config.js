export default defineConfig(({ command }) => {
  return {
    base: "/Evidence/", // Добавь это!
    define: {
      [command === "serve" ? "global" : "_global"]: {},
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js",
        },
      },
      outDir: "../dist",
    },
    plugins: [injectHTML(), FullReload(["./src/**/**/**.html"])],
  };
});
