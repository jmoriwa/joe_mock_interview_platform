import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Don't resolve server-only modules on the client-side
            config.resolve.fallback = {
                ...config.resolve.fallback,
                child_process: false,
                fs: false,
                net: false,
                tls: false,
                dns: false,
                os: false,
                path: false,
            };
        }
        return config;
    },
    // Include any other existing Next.js configuration options you might have
};

export default nextConfig;