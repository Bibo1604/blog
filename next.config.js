/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"]
    },
    experimental: { urlImports: ['https://themer.sanity.build/'] },
}

module.exports = nextConfig
