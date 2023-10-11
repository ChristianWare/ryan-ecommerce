// const {
//   DB_URI: _DB_URI,
//   API: _API,
//   NEXTAUTH_SECRET: _NEXTAUTH_SECRET,
//   GOOGLE_CLIENT_ID: _GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET: _GOOGLE_CLIENT_SECRET,
// } = require("./config.ts");

// module.exports = {
//   env: {
//     DB_URI: _DB_URI,
//     API: _API,
//     NEXTAUTH_SECRET: _NEXTAUTH_SECRET,
//     GOOGLE_CLIENT_ID: _GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET: _GOOGLE_CLIENT_SECRET,
//   },
// };

/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    serverActions: true,
  },
  
};
