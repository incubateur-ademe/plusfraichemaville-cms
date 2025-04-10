export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "plusfraichemaville.s3.fr-par.scw.cloud",
            "f64fbe9d-cb33-4b6a-a46b-ddac7a1770c3.svc.edge.scw.cloud",
            "cdn.plusfraichemaville.fr",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "plusfraichemaville.s3.fr-par.scw.cloud",
            "f64fbe9d-cb33-4b6a-a46b-ddac7a1770c3.svc.edge.scw.cloud",
            "cdn.plusfraichemaville.fr",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "global::sentry",
];
