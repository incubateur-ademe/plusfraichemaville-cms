import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonCitation extends Schema.Component {
  collectionName: 'components_common_citations';
  info: {
    description: '';
    displayName: 'citation';
  };
  attributes: {
    auteur: Attribute.String & Attribute.Required;
    texte: Attribute.RichText &
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

export interface CommonImageWithCaption extends Schema.Component {
  collectionName: 'components_common_image_with_captions';
  info: {
    displayName: 'image_with_caption';
  };
  attributes: {
    caption: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface FicheDiagnosticEtapeMiseEnOeuvre extends Schema.Component {
  collectionName: 'components_fiche_diagnostic_etape_mise_en_oeuvres';
  info: {
    displayName: 'Etape_mise_en_oeuvre';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    titre: Attribute.String & Attribute.Required;
  };
}

export interface FicheDiagnosticUtiliteMethode extends Schema.Component {
  collectionName: 'components_fiche_diagnostic_utilite_methodes';
  info: {
    displayName: 'utilite_methode';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
  };
}

export interface FicheSolutionAideRegionale extends Schema.Component {
  collectionName: 'components_fiche_solution_aide_regionales';
  info: {
    description: '';
    displayName: 'aide_regionale';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    region: Attribute.Relation<
      'fiche-solution.aide-regionale',
      'oneToOne',
      'api::region.region'
    >;
    titre: Attribute.String;
  };
}

export interface FicheSolutionEtapeDiagnostic extends Schema.Component {
  collectionName: 'components_fiche_solution_etape_diagnostics';
  info: {
    displayName: 'etape_diagnostic';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    titre: Attribute.String & Attribute.Required;
  };
}

export interface FicheSolutionEtapeEntretien extends Schema.Component {
  collectionName: 'components_fiche_solution_etape_entretiens';
  info: {
    description: '';
    displayName: 'etape_entretien';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    titre: Attribute.String & Attribute.Required;
  };
}

export interface FicheSolutionEtapeMiseEnOeuvre extends Schema.Component {
  collectionName: 'components_fiche_solution_etape_mise_en_oeuvres';
  info: {
    displayName: 'etape_mise_en_oeuvre';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    titre: Attribute.String & Attribute.Required;
  };
}

export interface FicheSolutionOups extends Schema.Component {
  collectionName: 'components_fiche_solution_oups';
  info: {
    description: '';
    displayName: 'oups';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    solutions_reparatrices: Attribute.Relation<
      'fiche-solution.oups',
      'oneToMany',
      'api::fiche-solution.fiche-solution'
    >;
    titre: Attribute.Text & Attribute.Required;
  };
}

export interface RetourExperienceCalendrier extends Schema.Component {
  collectionName: 'components_retour_experience_calendriers';
  info: {
    description: '';
    displayName: 'Calendrier';
  };
  attributes: {
    date: Attribute.String & Attribute.Required;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    titre: Attribute.String & Attribute.Required;
  };
}

export interface RetourExperienceContact extends Schema.Component {
  collectionName: 'components_retour_experience_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    email: Attribute.Email;
    label: Attribute.String;
    nom: Attribute.String;
    site_internet: Attribute.String;
    sous_type_de_contact: Attribute.Enumeration<
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
        'syndicat_mixte'
      ]
    >;
    telephone: Attribute.String;
    type_de_contact: Attribute.Enumeration<
      [
        'collectivite',
        'conception_et_realisation',
        'concertation_citoyenne',
        'conseil',
        'groupements',
        'recherche_et_innovation',
        'structure_publique'
      ]
    >;
  };
}

export interface RetourExperienceSituation extends Schema.Component {
  collectionName: 'components_retour_experience_situations';
  info: {
    description: '';
    displayName: 'Situation';
  };
  attributes: {
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'light';
        }
      >;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.citation': CommonCitation;
      'common.image-with-caption': CommonImageWithCaption;
      'fiche-diagnostic.etape-mise-en-oeuvre': FicheDiagnosticEtapeMiseEnOeuvre;
      'fiche-diagnostic.utilite-methode': FicheDiagnosticUtiliteMethode;
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
