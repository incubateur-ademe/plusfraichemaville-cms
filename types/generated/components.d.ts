import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCitation extends Struct.ComponentSchema {
  collectionName: 'components_common_citations';
  info: {
    description: '';
    displayName: 'citation';
  };
  attributes: {
    auteur: Schema.Attribute.String & Schema.Attribute.Required;
    texte: Schema.Attribute.RichText &
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

export interface FicheDiagnosticEtapeMiseEnOeuvre
  extends Struct.ComponentSchema {
  collectionName: 'components_fiche_diagnostic_etape_mise_en_oeuvres';
  info: {
    displayName: 'Etape_mise_en_oeuvre';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FicheSolutionAideRegionale extends Struct.ComponentSchema {
  collectionName: 'components_fiche_solution_aide_regionales';
  info: {
    description: '';
    displayName: 'aide_regionale';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    region: Schema.Attribute.Relation<'oneToOne', 'api::region.region'>;
    titre: Schema.Attribute.String;
  };
}

export interface FicheSolutionEtapeDiagnostic extends Struct.ComponentSchema {
  collectionName: 'components_fiche_solution_etape_diagnostics';
  info: {
    displayName: 'etape_diagnostic';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FicheSolutionEtapeEntretien extends Struct.ComponentSchema {
  collectionName: 'components_fiche_solution_etape_entretiens';
  info: {
    description: '';
    displayName: 'etape_entretien';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FicheSolutionEtapeMiseEnOeuvre extends Struct.ComponentSchema {
  collectionName: 'components_fiche_solution_etape_mise_en_oeuvres';
  info: {
    displayName: 'etape_mise_en_oeuvre';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FicheSolutionOups extends Struct.ComponentSchema {
  collectionName: 'components_fiche_solution_oups';
  info: {
    description: '';
    displayName: 'oups';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    solutions_reparatrices: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    titre: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface RetourExperienceCalendrier extends Struct.ComponentSchema {
  collectionName: 'components_retour_experience_calendriers';
  info: {
    description: '';
    displayName: 'Calendrier';
  };
  attributes: {
    date: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface RetourExperienceContact extends Struct.ComponentSchema {
  collectionName: 'components_retour_experience_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    email: Schema.Attribute.Email;
    label: Schema.Attribute.String;
    site_internet: Schema.Attribute.String;
    sous_type_de_contact: Schema.Attribute.Enumeration<
      [
        'agence_architecture',
        'agence_communication',
        'agence_conception_lumiere',
        'agence_eau',
        'agence_paysagiste',
        'agence_urbanisme',
        'amenageur',
        'assistance_maitrise_ouvrage',
        'association',
        'bailleur_social',
        'bureau_etude_ingenierie',
        'bureau_etude_technique',
        'caue',
        'collectif',
        'collectivite',
        'entreprise_privee',
        'etablissement_public',
        'federation',
        'institut',
        'laboratoire_recherche',
        'pole_innovation',
        'pole_universitaire',
        'societe_arboriculture',
        'syndic_copropriete',
        'syndicat_mixte',
      ]
    >;
    telephone: Schema.Attribute.String;
    type_de_contact: Schema.Attribute.Enumeration<
      [
        'conseil',
        'structure_publique',
        'conception_et_realisation',
        'concertation_citoyenne',
        'recherche_et_innovation',
        'groupements',
        'collectivite',
      ]
    >;
  };
}

export interface RetourExperienceSituation extends Struct.ComponentSchema {
  collectionName: 'components_retour_experience_situations';
  info: {
    description: '';
    displayName: 'Situation';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          output: 'HTML';
          preset: 'default';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.citation': CommonCitation;
      'fiche-diagnostic.etape-mise-en-oeuvre': FicheDiagnosticEtapeMiseEnOeuvre;
      'fiche-solution.aide-regionale': FicheSolutionAideRegionale;
      'fiche-solution.etape-diagnostic': FicheSolutionEtapeDiagnostic;
      'fiche-solution.etape-entretien': FicheSolutionEtapeEntretien;
      'fiche-solution.etape-mise-en-oeuvre': FicheSolutionEtapeMiseEnOeuvre;
      'fiche-solution.oups': FicheSolutionOups;
      'retour-experience.calendrier': RetourExperienceCalendrier;
      'retour-experience.contact': RetourExperienceContact;
      'retour-experience.situation': RetourExperienceSituation;
    }
  }
}
