/** @type {import('next').NextConfig} */
const nextConfig = {
  //   i18n: {
  //     locales: ["default", "en", "de", "fr"],
  //     defaultLocale: "default",
  //     localeDetection: false,
  //   },
  //   trailingSlash: true,
};

module.exports = nextConfig;

const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  // Other Next.js configuration ...
});
