import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: strapi.config.environment,
  integrations: [new Sentry.Integrations.Http({ tracing: true })],
  tracesSampleRate: 1.0,
  debug: true,
});

export default () => {
  strapi.plugin("sentry").service("sentry").sendError("test error");

  return async (_, next) => {
    try {
      await next();
    } catch (error) {
      Sentry.captureException(error);
      throw error;
    }
  };
};
