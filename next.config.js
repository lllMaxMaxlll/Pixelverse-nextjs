/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_KEY: "key=f310acddfab741aab86598b25e8d7e6e",
		API_URL: "https://api.rawg.io/api",
	},
	// Le damos permisos a que renderize imagenes de ese host
	images: {
		remotePatterns: [
			{
				hostname: "media.rawg.io",
			},
		],
	},
};

module.exports = nextConfig;
