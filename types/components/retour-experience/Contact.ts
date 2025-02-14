// Interface automatically generated by schemas-to-ts

export enum TypeDeContact {
  Collectivite = 'collectivite',
  ConceptionEtRealisation = 'conception_et_realisation',
  ConcertationCitoyenne = 'concertation_citoyenne',
  Conseil = 'conseil',
  Groupements = 'groupements',
  RechercheEtInnovation = 'recherche_et_innovation',
  StructurePublique = 'structure_publique',}
export enum SousTypeDeContact {
  AgenceArchitecture = 'agence_architecture',
  AgenceCommunication = 'agence_communication',
  AgenceConceptionLumiere = 'agence_conception_lumiere',
  AgenceEau = 'agence_eau',
  AgencePaysagiste = 'agence_paysagiste',
  AgenceUrbanisme = 'agence_urbanisme',
  Amenageur = 'amenageur',
  AssistanceMaitriseOuvrage = 'assistance_maitrise_ouvrage',
  Association = 'association',
  BailleurSocial = 'bailleur_social',
  BureauEtudeIngenierie = 'bureau_etude_ingenierie',
  BureauEtudeTechnique = 'bureau_etude_technique',
  Caue = 'caue',
  Collectif = 'collectif',
  Collectivite = 'collectivite',
  EntreprisePrivee = 'entreprise_privee',
  EtablissementPublic = 'etablissement_public',
  Federation = 'federation',
  Institut = 'institut',
  LaboratoireRecherche = 'laboratoire_recherche',
  PoleInnovation = 'pole_innovation',
  PoleUniversitaire = 'pole_universitaire',
  SocieteArboriculture = 'societe_arboriculture',
  SyndicCopropriete = 'syndic_copropriete',
  SyndicatMixte = 'syndicat_mixte',}

export interface Contact {
  label?: string;
  telephone?: string;
  email?: string;
  type_de_contact?: TypeDeContact;
  sous_type_de_contact?: SousTypeDeContact;
  site_internet?: string;
  nom?: string;
}
export interface Contact_Plain {
  label?: string;
  telephone?: string;
  email?: string;
  type_de_contact?: TypeDeContact;
  sous_type_de_contact?: SousTypeDeContact;
  site_internet?: string;
  nom?: string;
}

export interface Contact_NoRelations {
  label?: string;
  telephone?: string;
  email?: string;
  type_de_contact?: TypeDeContact;
  sous_type_de_contact?: SousTypeDeContact;
  site_internet?: string;
  nom?: string;
}

