module.exports = ({ env }) => ({
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"],
      googleMapsApiKey: env("GOOGLE_MAPS_PLACES_API_TOKEN"),
      autocompletionRequestOptions: {
        language: "fr",
        locationBias: "IP_BIAS",
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("SCALEWAY_ACCESS_KEY_ID"),
          secretAccessKey: env("SCALEWAY_ACCESS_SECRET"),
          endpoint: env("SCALEWAY_ENDPOINT"),
          region: env("SCALEWAY_REGION"),
          params: {
            Bucket: env("SCALEWAY_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      breakpoints: {
        large: 1920,
        medium: 650,
        small: 300,
      },
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
  graphql: {
    config: {
      defaultLimit: 100,
    },
  },
});
