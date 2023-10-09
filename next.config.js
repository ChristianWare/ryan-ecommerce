const config = require("./config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URL: config.DB_URI,
  },
};

module.exports = nextConfig;
