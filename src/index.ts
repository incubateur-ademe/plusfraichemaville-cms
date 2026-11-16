import type { Core } from '@strapi/strapi';
import { DEPARTEMENTS } from './api/departement/data/departements';

const seedDepartements = async (strapi: Core.Strapi) => {
  const query = strapi.db.query('api::departement.departement');
  const existing = await query.findMany({ select: ['code'] });
  const existingCodes = new Set(existing.map((d: { code: string }) => d.code));
  const missing = DEPARTEMENTS.filter((d) => !existingCodes.has(d.code));
  if (missing.length === 0) return;

  for (const departement of missing) {
    await strapi.documents('api::departement.departement').create({ data: departement });
  }
  strapi.log.info(`[seed] ${missing.length} département(s) ajouté(s)`);
};

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedDepartements(strapi);
  },
};
