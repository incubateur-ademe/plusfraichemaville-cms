module.exports = ({env}) => ({
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
          baseUrl: "https://f64fbe9d-cb33-4b6a-a46b-ddac7a1770c3.svc.edge.scw.cloud"
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
  "schemas-to-ts": {
    enabled: true,
    config: {
      destinationFolder: '/types',
    }
  },
});
