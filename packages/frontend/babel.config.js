module.exports = function configureBabel(api) {
  api.cache(false);

  return {
    plugins: [],
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: {
            browsers: ["last 2 versions", "safari >= 7"],
          },
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    env: {
      test: {
        plugins: [
          "@babel/plugin-transform-modules-commonjs",
          "dynamic-import-node",
        ],
      },
    },
  };
};
