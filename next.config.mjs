import { paraglide } from "@inlang/paraglide-next/plugin"
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['de',  'en', 'fr', 'it', 'es', 'ch', 'ru', 'ja', 'zh'],
		defaultLocale: 'de',
		localeDetection: false,
	  },

};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./paraglide"
	},
	...nextConfig
});
