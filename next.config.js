// @ts-check

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

 
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '3000-idx-nextjsdjango-1744541128151.cluster-rcyheetymngt4qx5fpswua3ry4.cloudworkstations.dev'],

    // i18n: {
    //   // These are all the locales you want to support in
    //   // your application
    //   locales: ["en-US", "fr", "nl-NL"],
    //   // This is the default locale you want to be used when visiting
    //   // a non-locale prefixed path e.g. `/hello`
    //   defaultLocale: "en-US",
    //   // This is a list of locale domains and the default locale they
    //   // should handle (these are only required when setting up domain routing)
    //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    //   domains: [
    //     {
    //       domain: "127.0.0.1",
    //       defaultLocale: "en-US",
    //       http: true,
    //     },
    //   ],
    // }
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }
 
  return {
    /* config options for all phases except development here */
  }
}


