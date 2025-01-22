import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAideDecisionEtapeAideDecisionEtape
  extends Struct.CollectionTypeSchema {
  collectionName: 'aide_decision_etapes';
  info: {
    description: '';
    displayName: 'Aide D\u00E9cision Etape';
    pluralName: 'aide-decision-etapes';
    singularName: 'aide-decision-etape';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    etape_precedente: Schema.Attribute.Relation<
      'manyToOne',
      'api::aide-decision-etape.aide-decision-etape'
    >;
    etapes_suivantes: Schema.Attribute.Relation<
      'oneToMany',
      'api::aide-decision-etape.aide-decision-etape'
    >;
    fiches_solutions: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aide-decision-etape.aide-decision-etape'
    > &
      Schema.Attribute.Private;
    nom: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    question_suivante: Schema.Attribute.String;
    rank: Schema.Attribute.Integer;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCobeneficeCobenefice extends Struct.CollectionTypeSchema {
  collectionName: 'cobenefices';
  info: {
    description: '';
    displayName: 'Cobenefice';
    pluralName: 'cobenefices';
    singularName: 'cobenefice';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    fiches_solutions: Schema.Attribute.Relation<
      'manyToMany',
      'api::fiche-solution.fiche-solution'
    >;
    icone: Schema.Attribute.Enumeration<
      [
        'abriter_biodiversite',
        'ameliorer_bien_etre_sante',
        'ameliorer_qualite_air',
        'creer_lien_social',
        'faire_economies_eau_potable',
        'filtrer_pollutions_preserver_qualite_eaux',
        'gerer_eaux_pluviales',
        'prevenir_risques_innondation',
        'prolongee_durabilite_equipement',
        'reduide_place_voiture_en_ville',
        'reduire_consommations_energetiques',
        'reduire_nuisances_sonores',
        'rendre_espaces_publics_plus_accueillants',
        'rendre_ville_plus_ludique',
        'sensibiliser_vivant_nature',
        'sequestrer_du_carbone',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cobenefice.cobenefice'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFicheDiagnosticFicheDiagnostic
  extends Struct.CollectionTypeSchema {
  collectionName: 'fiche_diagnostics';
  info: {
    description: '';
    displayName: 'Fiche Diagnostic';
    pluralName: 'fiche-diagnostics';
    singularName: 'fiche-diagnostic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avantage_description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    besoin: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    cout_max: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_min: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    delai_max: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    delai_min: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'defaultHtml';
        }
      >;
    description_courte: Schema.Attribute.String & Schema.Attribute.Required;
    echelle: Schema.Attribute.Enumeration<['territoire', 'espace']>;
    en_savoir_plus_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    etapes_mise_en_oeuvre: Schema.Attribute.Component<
      'fiche-diagnostic.etape-mise-en-oeuvre',
      true
    >;
    explication_source: Schema.Attribute.String;
    fiches_diagnostics_associees: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-diagnostic.fiche-diagnostic'
    >;
    image_principale: Schema.Attribute.Media<'images'>;
    indicateurs: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-diagnostic.fiche-diagnostic'
    > &
      Schema.Attribute.Private;
    materiel: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    methode: Schema.Attribute.Enumeration<
      [
        'observation',
        'enquete',
        'simulation_numerique',
        'analyse_spatiale',
        'modelisation_spatiale',
      ]
    >;
    partenaire: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vigilance_description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
  };
}

export interface ApiFicheSolutionFicheSolution
  extends Struct.CollectionTypeSchema {
  collectionName: 'fiche_solutions';
  info: {
    description: '';
    displayName: 'Fiche Solution';
    pluralName: 'fiche-solutions';
    singularName: 'fiche-solution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aides_regionales: Schema.Attribute.Component<
      'fiche-solution.aide-regionale',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    aides_territoires_mots_cles: Schema.Attribute.Text;
    baisse_temperature: Schema.Attribute.Decimal &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cobenefices: Schema.Attribute.Relation<
      'manyToMany',
      'api::cobenefice.cobenefice'
    >;
    contexte_description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    contexte_titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Pourquoi choisir cette solution ?'>;
    cout_entretien_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    cout_entretien_unite: Schema.Attribute.Enumeration<
      [
        'metreCarre',
        'lineaire',
        'metreCube',
        'unite',
        'megaWattHeure',
        'kiloWatt',
      ]
    >;
    cout_maximum: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_maximum_entretien: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_entretien: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_unite: Schema.Attribute.Enumeration<['metreCarre', 'megaWattHeure']> &
      Schema.Attribute.DefaultTo<'metreCarre'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credits: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    delai_travaux_maximum: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    delai_travaux_minimum: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    description_courte: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    description_estimation: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    en_savoir_plus: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    etapes_diagnostic: Schema.Attribute.Component<
      'fiche-solution.etape-diagnostic',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    etapes_entretien: Schema.Attribute.Component<
      'fiche-solution.etape-entretien',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    etapes_mise_en_oeuvre: Schema.Attribute.Component<
      'fiche-solution.etape-mise-en-oeuvre',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    fiches_solutions_complementaires: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image_principale: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    libelle_avantage_solution: Schema.Attribute.String;
    lien_aide_territoire: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    lien_fond_vert: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    > &
      Schema.Attribute.Private;
    logo_partenaire: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    materiaux: Schema.Attribute.Relation<
      'manyToMany',
      'api::materiau.materiau'
    >;
    oups: Schema.Attribute.Component<'fiche-solution.oups', true> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    point_vigilance: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    portee_baisse_temperature: Schema.Attribute.Enumeration<
      ['air', 'surface', 'interieur']
    >;
    publishedAt: Schema.Attribute.DateTime;
    rafraichissement_attendu_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    rank: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    solution_retour_experiences: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-retour-experience.solution-retour-experience'
    >;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    type_solution: Schema.Attribute.Enumeration<
      ['bleue', 'verte', 'grise', 'douce']
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    types_espace: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Rond-point:rondpoint',
          'B\u00E2timent:batiment',
          'Parking:parking',
          'Rue:rue',
          'Place:place',
          "Cour d'\u00E9cole:ecole",
          'Parc et jardin:parc',
        ]
      >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMateriauMateriau extends Struct.CollectionTypeSchema {
  collectionName: 'materiaux';
  info: {
    description: '';
    displayName: 'Materiau';
    pluralName: 'materiaux';
    singularName: 'materiau';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    cout_maximum_entretien: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_maximum_fourniture: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_entretien: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_fourniture: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_unite: Schema.Attribute.Enumeration<
      [
        'metreCarre',
        'lineaire',
        'metreCube',
        'unite',
        'megaWattHeure',
        'kiloWatt',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    fiches_solution: Schema.Attribute.Relation<
      'manyToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::materiau.materiau'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiObjectifDeveloppementDurableObjectifDeveloppementDurable
  extends Struct.CollectionTypeSchema {
  collectionName: 'objectif_developpement_durables';
  info: {
    displayName: 'Objectif Developpement Durable';
    pluralName: 'objectif-developpement-durables';
    singularName: 'objectif-developpement-durable';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::objectif-developpement-durable.objectif-developpement-durable'
    > &
      Schema.Attribute.Private;
    numero: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMax<
        {
          max: 17;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRegionRegion extends Struct.CollectionTypeSchema {
  collectionName: 'regions';
  info: {
    displayName: 'region';
    pluralName: 'regions';
    singularName: 'region';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::region.region'
    > &
      Schema.Attribute.Private;
    nom: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRetourExperienceRetourExperience
  extends Struct.CollectionTypeSchema {
  collectionName: 'retour_experiences';
  info: {
    description: '';
    displayName: 'Retour experience';
    pluralName: 'retour-experiences';
    singularName: 'retour-experience';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    calendrier: Schema.Attribute.Component<
      'retour-experience.calendrier',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    citations: Schema.Attribute.Component<'common.citation', true> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    climat_actuel: Schema.Attribute.Enumeration<
      [
        'oceanique',
        'mediterraneen',
        'semi_aride',
        'semi_continental',
        'equatorial',
        'tempere',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    climat_futur: Schema.Attribute.Enumeration<
      [
        'oceanique',
        'mediterraneen',
        'semi_aride',
        'semi_continental',
        'equatorial',
        'tempere',
      ]
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    contact: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    contacts: Schema.Attribute.Component<'retour-experience.contact', true>;
    cout: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    cout_euro: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credits: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    difficultes: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    echelle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    financement: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    image_principale: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::retour-experience.retour-experience'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.JSON;
    odds: Schema.Attribute.Relation<
      'oneToMany',
      'api::objectif-developpement-durable.objectif-developpement-durable'
    >;
    partenaires: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    porteur: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    publishedAt: Schema.Attribute.DateTime;
    rank: Schema.Attribute.Integer &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    region: Schema.Attribute.Relation<'oneToOne', 'api::region.region'>;
    ressources: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    retour_experiences: Schema.Attribute.Relation<
      'oneToMany',
      'api::retour-experience.retour-experience'
    >;
    situation_apres: Schema.Attribute.Component<
      'retour-experience.situation',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    situation_avant: Schema.Attribute.Component<
      'retour-experience.situation',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    solution_retour_experiences: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-retour-experience.solution-retour-experience'
    >;
    temporalite: Schema.Attribute.Enumeration<
      ['court_terme', 'moyen_terme', 'long_terme']
    > &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    types_espaces: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Rond-point:rondpoint',
          'B\u00E2timent:batiment',
          'Parking:parking',
          'Rue:rue',
          'Place:place',
          "Cour d'\u00E9cole:ecole",
          'Parc et jardin:parc',
        ]
      >;
    types_solutions: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['bleue', 'douce', 'verte', 'grise']
      >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSolutionRetourExperienceSolutionRetourExperience
  extends Struct.CollectionTypeSchema {
  collectionName: 'solution_retour_experiences';
  info: {
    description: '';
    displayName: 'Solution Retour Experience';
    pluralName: 'solution-retour-experiences';
    singularName: 'solution-retour-experience';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    fiche_solution: Schema.Attribute.Relation<
      'manyToOne',
      'api::fiche-solution.fiche-solution'
    >;
    image: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-retour-experience.solution-retour-experience'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    retour_experience: Schema.Attribute.Relation<
      'manyToOne',
      'api::retour-experience.retour-experience'
    >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWebinaireWebinaire extends Struct.CollectionTypeSchema {
  collectionName: 'webinaires';
  info: {
    description: '';
    displayName: 'Webinaire';
    pluralName: 'webinaires';
    singularName: 'webinaire';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    heure_debut: Schema.Attribute.Time;
    heure_fin: Schema.Attribute.Time;
    jour_evenement: Schema.Attribute.Date;
    lien_inscription: Schema.Attribute.String;
    lien_replay: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::webinaire.webinaire'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::aide-decision-etape.aide-decision-etape': ApiAideDecisionEtapeAideDecisionEtape;
      'api::cobenefice.cobenefice': ApiCobeneficeCobenefice;
      'api::fiche-diagnostic.fiche-diagnostic': ApiFicheDiagnosticFicheDiagnostic;
      'api::fiche-solution.fiche-solution': ApiFicheSolutionFicheSolution;
      'api::materiau.materiau': ApiMateriauMateriau;
      'api::objectif-developpement-durable.objectif-developpement-durable': ApiObjectifDeveloppementDurableObjectifDeveloppementDurable;
      'api::region.region': ApiRegionRegion;
      'api::retour-experience.retour-experience': ApiRetourExperienceRetourExperience;
      'api::solution-retour-experience.solution-retour-experience': ApiSolutionRetourExperienceSolutionRetourExperience;
      'api::webinaire.webinaire': ApiWebinaireWebinaire;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
