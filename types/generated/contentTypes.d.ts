import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
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
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
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
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
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
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAideDecisionEtapeAideDecisionEtape
  extends Schema.CollectionType {
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aide-decision-etape.aide-decision-etape',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    etape_precedente: Attribute.Relation<
      'api::aide-decision-etape.aide-decision-etape',
      'manyToOne',
      'api::aide-decision-etape.aide-decision-etape'
    >;
    etapes_suivantes: Attribute.Relation<
      'api::aide-decision-etape.aide-decision-etape',
      'oneToMany',
      'api::aide-decision-etape.aide-decision-etape'
    >;
    fiches_solutions: Attribute.Relation<
      'api::aide-decision-etape.aide-decision-etape',
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image: Attribute.Media<'images'>;
    nom: Attribute.String & Attribute.Required;
    publishedAt: Attribute.DateTime;
    question_suivante: Attribute.String;
    rank: Attribute.Integer;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::aide-decision-etape.aide-decision-etape',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCobeneficeCobenefice extends Schema.CollectionType {
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cobenefice.cobenefice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    fiches_solutions: Attribute.Relation<
      'api::cobenefice.cobenefice',
      'manyToMany',
      'api::fiche-solution.fiche-solution'
    >;
    icone: Attribute.Enumeration<
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
        'sequestrer_du_carbone'
      ]
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::cobenefice.cobenefice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEvenementEvenement extends Schema.CollectionType {
  collectionName: 'evenements';
  info: {
    displayName: 'Ev\u00E9nement';
    pluralName: 'evenements';
    singularName: 'evenement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bouton_lien: Attribute.String;
    bouton_texte: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date_fin: Attribute.DateTime & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    image_principale: Attribute.Media<'images'> & Attribute.Required;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    type: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFicheDiagnosticFicheDiagnostic
  extends Schema.CollectionType {
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
    avantage_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    besoin: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    cout_max: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_min: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fiche-diagnostic.fiche-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    delai_max: Attribute.Float &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    delai_min: Attribute.Float &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description_courte: Attribute.String & Attribute.Required;
    echelle: Attribute.Enumeration<['territoire', 'espace']>;
    echelle_spatiale: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['commune', 'espace_public']
      >;
    echelle_thermique: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['ilot_chaleur_urbain', 'confort_thermique']
      >;
    en_savoir_plus_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    etapes_mise_en_oeuvre: Attribute.Component<
      'fiche-diagnostic.etape-mise-en-oeuvre',
      true
    >;
    explication_cout: Attribute.String;
    explication_source: Attribute.String;
    fiches_diagnostics_associees: Attribute.Relation<
      'api::fiche-diagnostic.fiche-diagnostic',
      'oneToMany',
      'api::fiche-diagnostic.fiche-diagnostic'
    >;
    image_icone: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_principale: Attribute.Media<'images'>;
    indicateurs: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    lien_rex_diagnostics: Attribute.Relation<
      'api::fiche-diagnostic.fiche-diagnostic',
      'oneToMany',
      'api::lien-rex-diagnostic.lien-rex-diagnostic'
    >;
    materiel: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    methode: Attribute.Enumeration<
      [
        'observation',
        'enquete',
        'simulation_numerique',
        'analyse_spatiale',
        'modelisation_spatiale'
      ]
    >;
    nom_scientifique: Attribute.String;
    objectifs: Attribute.Component<'fiche-diagnostic.utilite-methode', true>;
    partenaire: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    titre: Attribute.String & Attribute.Required;
    type_livrables: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::fiche-diagnostic.fiche-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    vigilance_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ApiFicheSolutionFicheSolution extends Schema.CollectionType {
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
    aides_regionales: Attribute.Component<
      'fiche-solution.aide-regionale',
      true
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    aides_territoires_mots_cles: Attribute.Text;
    baisse_temperature: Attribute.Decimal &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cobenefices: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'manyToMany',
      'api::cobenefice.cobenefice'
    >;
    contexte_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    contexte_titre: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.DefaultTo<'Pourquoi choisir cette solution ?'>;
    cout_entretien_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    cout_entretien_unite: Attribute.Enumeration<
      [
        'metreCarre',
        'lineaire',
        'metreCube',
        'unite',
        'megaWattHeure',
        'kiloWatt'
      ]
    >;
    cout_maximum: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_maximum_entretien: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_entretien: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_unite: Attribute.Enumeration<['metreCarre', 'megaWattHeure']> &
      Attribute.DefaultTo<'metreCarre'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credits: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    delai_travaux_maximum: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    delai_travaux_minimum: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description_courte: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    description_estimation: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    en_savoir_plus: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    etapes_diagnostic: Attribute.Component<
      'fiche-solution.etape-diagnostic',
      true
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    etapes_entretien: Attribute.Component<
      'fiche-solution.etape-entretien',
      true
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    etapes_mise_en_oeuvre: Attribute.Component<
      'fiche-solution.etape-mise-en-oeuvre',
      true
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    fiches_solutions_complementaires: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image_principale: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    libelle_avantage_solution: Attribute.String;
    lien_aide_territoire: Attribute.String &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    lien_fond_vert: Attribute.String &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    logo_partenaire: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    materiaux: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'manyToMany',
      'api::materiau.materiau'
    >;
    oups: Attribute.Component<'fiche-solution.oups', true> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    point_vigilance: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    portee_baisse_temperature: Attribute.Enumeration<
      ['air', 'surface', 'interieur']
    >;
    publishedAt: Attribute.DateTime;
    rafraichissement_attendu_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    solution_retour_experiences: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'oneToMany',
      'api::solution-retour-experience.solution-retour-experience'
    >;
    titre: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    type_solution: Attribute.Enumeration<['bleue', 'verte', 'grise', 'douce']> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    types_espace: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Rond-point:rondpoint',
          'B\u00E2timent:batiment',
          'Parking:parking',
          'Rue:rue',
          'Place:place',
          "Cour d'\u00E9cole:ecole",
          'Parc et jardin:parc'
        ]
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::fiche-solution.fiche-solution',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLienRexDiagnosticLienRexDiagnostic
  extends Schema.CollectionType {
  collectionName: 'lien_rex_diagnostics';
  info: {
    description: '';
    displayName: 'Lien REX-Diagnostic';
    pluralName: 'lien-rex-diagnostics';
    singularName: 'lien-rex-diagnostic';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lien-rex-diagnostic.lien-rex-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    fiche_diagnostic: Attribute.Relation<
      'api::lien-rex-diagnostic.lien-rex-diagnostic',
      'manyToOne',
      'api::fiche-diagnostic.fiche-diagnostic'
    >;
    retour_experience_diagnostic: Attribute.Relation<
      'api::lien-rex-diagnostic.lien-rex-diagnostic',
      'manyToOne',
      'api::retour-experience-diagnostic.retour-experience-diagnostic'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::lien-rex-diagnostic.lien-rex-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMateriauMateriau extends Schema.CollectionType {
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
    cout_maximum_entretien: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_maximum_fourniture: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_entretien: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_minimum_fourniture: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }> &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cout_unite: Attribute.Enumeration<
      [
        'metreCarre',
        'lineaire',
        'metreCube',
        'unite',
        'megaWattHeure',
        'kiloWatt'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::materiau.materiau',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    fiches_solution: Attribute.Relation<
      'api::materiau.materiau',
      'manyToMany',
      'api::fiche-solution.fiche-solution'
    >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    titre: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::materiau.materiau',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiObjectifDeveloppementDurableObjectifDeveloppementDurable
  extends Schema.CollectionType {
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::objectif-developpement-durable.objectif-developpement-durable',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String & Attribute.Required;
    numero: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<
        {
          max: 17;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::objectif-developpement-durable.objectif-developpement-durable',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegionRegion extends Schema.CollectionType {
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
    code: Attribute.String & Attribute.Required & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    nom: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::region.region',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRetourExperienceDiagnosticRetourExperienceDiagnostic
  extends Schema.CollectionType {
  collectionName: 'retour_experience_diagnostics';
  info: {
    description: '';
    displayName: 'Retour Experience Diagnostic';
    pluralName: 'retour-experience-diagnostics';
    singularName: 'retour-experience-diagnostic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    annee_realisation: Attribute.String;
    apres: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    besoin: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    citations: Attribute.Component<'common.citation', true>;
    climat_actuel: Attribute.String;
    climat_futur: Attribute.String;
    collectivite_info: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    contacts: Attribute.Component<'retour-experience.contact', true>;
    cout_description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    cout_euro: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::retour-experience-diagnostic.retour-experience-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credits: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    financements: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    guide_pdf: Attribute.Media<'files'>;
    image_principale: Attribute.Media<'images'>;
    lien_rex_diagnostics: Attribute.Relation<
      'api::retour-experience-diagnostic.retour-experience-diagnostic',
      'oneToMany',
      'api::lien-rex-diagnostic.lien-rex-diagnostic'
    >;
    lieu: Attribute.String & Attribute.Required;
    points_vigilance: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer;
    resultats: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
    resultats_images: Attribute.Component<'common.image-with-caption', true>;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    titre: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::retour-experience-diagnostic.retour-experience-diagnostic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRetourExperienceRetourExperience
  extends Schema.CollectionType {
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
    calendrier: Attribute.Component<'retour-experience.calendrier', true> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    citations: Attribute.Component<'common.citation', true> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    climat_actuel: Attribute.Enumeration<
      [
        'oceanique',
        'mediterraneen',
        'semi_aride',
        'semi_continental',
        'equatorial',
        'tempere',
        'tropical'
      ]
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    climat_futur: Attribute.Enumeration<
      [
        'oceanique',
        'mediterraneen',
        'semi_aride',
        'semi_continental',
        'equatorial',
        'tempere',
        'tropical'
      ]
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    contact: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    contacts: Attribute.Component<'retour-experience.contact', true>;
    cout: Attribute.String &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    cout_euro: Attribute.Integer;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    credits: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    difficultes: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    echelle: Attribute.String &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    export_aquagir: Attribute.Boolean & Attribute.DefaultTo<false>;
    financement: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    image_principale: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    location: Attribute.JSON;
    odds: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToMany',
      'api::objectif-developpement-durable.objectif-developpement-durable'
    >;
    partenaires: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    porteur: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    publishedAt: Attribute.DateTime;
    rank: Attribute.Integer &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    region: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToOne',
      'api::region.region'
    >;
    ressources: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    retour_experiences: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToMany',
      'api::retour-experience.retour-experience'
    >;
    situation_apres: Attribute.Component<'retour-experience.situation'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    situation_avant: Attribute.Component<'retour-experience.situation'> &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    solution_retour_experiences: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToMany',
      'api::solution-retour-experience.solution-retour-experience'
    >;
    temporalite: Attribute.Enumeration<
      ['court_terme', 'moyen_terme', 'long_terme']
    > &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    titre: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        versions: {
          versioned: true;
        };
      }>;
    types_espaces: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Rond-point:rondpoint',
          'B\u00E2timent:batiment',
          'Parking:parking',
          'Rue:rue',
          'Place:place',
          "Cour d'\u00E9cole:ecole",
          'Parc et jardin:parc'
        ]
      >;
    types_solutions: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['bleue', 'douce', 'verte', 'grise']
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::retour-experience.retour-experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSolutionRetourExperienceSolutionRetourExperience
  extends Schema.CollectionType {
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::solution-retour-experience.solution-retour-experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    fiche_solution: Attribute.Relation<
      'api::solution-retour-experience.solution-retour-experience',
      'manyToOne',
      'api::fiche-solution.fiche-solution'
    >;
    image: Attribute.Media<'images'>;
    retour_experience: Attribute.Relation<
      'api::solution-retour-experience.solution-retour-experience',
      'manyToOne',
      'api::retour-experience.retour-experience'
    >;
    titre: Attribute.String & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::solution-retour-experience.solution-retour-experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWebinaireWebinaire extends Schema.CollectionType {
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::webinaire.webinaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    heure_debut: Attribute.Time;
    heure_fin: Attribute.Time;
    jour_evenement: Attribute.Date;
    label_btn_secondaire: Attribute.String;
    lien_btn_secondaire: Attribute.String;
    lien_inscription: Attribute.String;
    lien_replay: Attribute.String;
    publishedAt: Attribute.DateTime;
    titre: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::webinaire.webinaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
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
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
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
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
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
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
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
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
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
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
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
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
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
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::aide-decision-etape.aide-decision-etape': ApiAideDecisionEtapeAideDecisionEtape;
      'api::cobenefice.cobenefice': ApiCobeneficeCobenefice;
      'api::evenement.evenement': ApiEvenementEvenement;
      'api::fiche-diagnostic.fiche-diagnostic': ApiFicheDiagnosticFicheDiagnostic;
      'api::fiche-solution.fiche-solution': ApiFicheSolutionFicheSolution;
      'api::lien-rex-diagnostic.lien-rex-diagnostic': ApiLienRexDiagnosticLienRexDiagnostic;
      'api::materiau.materiau': ApiMateriauMateriau;
      'api::objectif-developpement-durable.objectif-developpement-durable': ApiObjectifDeveloppementDurableObjectifDeveloppementDurable;
      'api::region.region': ApiRegionRegion;
      'api::retour-experience-diagnostic.retour-experience-diagnostic': ApiRetourExperienceDiagnosticRetourExperienceDiagnostic;
      'api::retour-experience.retour-experience': ApiRetourExperienceRetourExperience;
      'api::solution-retour-experience.solution-retour-experience': ApiSolutionRetourExperienceSolutionRetourExperience;
      'api::webinaire.webinaire': ApiWebinaireWebinaire;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
