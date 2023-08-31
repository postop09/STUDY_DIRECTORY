module.exports = {
  rules: [
    {
      test: /\.m?js$/,
      include: /node_modules/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.css?$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
  ],
};
