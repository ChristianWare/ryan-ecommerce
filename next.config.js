import { DB_URI as _DB_URI, API as _API, NEXTAUTH_SECRET as _NEXTAUTH_SECRET, GOOGLE_CLIENT_ID as _GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET as _GOOGLE_CLIENT_SECRET } from "./config.ts";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: _DB_URI,
    API: _API,
    NEXTAUTH_SECRET: _NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: _GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: _GOOGLE_CLIENT_SECRET,
  },
};

export default nextConfig;
