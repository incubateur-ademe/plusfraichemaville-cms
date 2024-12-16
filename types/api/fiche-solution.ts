// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { SolutionRetourExperience } from './solution-retour-experience';
import { EtapeMiseEnOeuvre } from '../components/fiche-diagnostic/EtapeMiseEnOeuvre';
import { EtapeEntretien } from '../components/fiche-solution/EtapeEntretien';
import { EtapeDiagnostic } from '../components/fiche-solution/EtapeDiagnostic';
import { AideRegionale } from '../components/fiche-solution/AideRegionale';
import { Materiau } from './materiau';
import { Cobenefice } from './cobenefice';
import { Oups } from '../components/fiche-solution/Oups';
import { Media_Plain } from '../common/Media';
import { SolutionRetourExperience_Plain } from './solution-retour-experience';
import { EtapeMiseEnOeuvre_Plain } from '../components/fiche-diagnostic/EtapeMiseEnOeuvre';
import { EtapeEntretien_Plain } from '../components/fiche-solution/EtapeEntretien';
import { EtapeDiagnostic_Plain } from '../components/fiche-solution/EtapeDiagnostic';
import { AideRegionale_Plain } from '../components/fiche-solution/AideRegionale';
import { Materiau_Plain } from './materiau';
import { Cobenefice_Plain } from './cobenefice';
import { Oups_Plain } from '../components/fiche-solution/Oups';
import { EtapeMiseEnOeuvre_NoRelations } from '../components/fiche-diagnostic/EtapeMiseEnOeuvre';
import { EtapeEntretien_NoRelations } from '../components/fiche-solution/EtapeEntretien';
import { EtapeDiagnostic_NoRelations } from '../components/fiche-solution/EtapeDiagnostic';
import { AideRegionale_NoRelations } from '../components/fiche-solution/AideRegionale';
import { Oups_NoRelations } from '../components/fiche-solution/Oups';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export enum TypeSolution {
  Bleue = 'bleue',
  Verte = 'verte',
  Grise = 'grise',
  Douce = 'douce',}
export enum PorteeBaisseTemperature {
  Air = 'air',
  Surface = 'surface',
  Interieur = 'interieur',}
export enum CoutEntretienUnite {
  MetreCarre = 'metreCarre',
  Lineaire = 'lineaire',
  MetreCube = 'metreCube',
  Unite = 'unite',
  MegaWattHeure = 'megaWattHeure',
  KiloWatt = 'kiloWatt',}
export enum CoutUnite {
  MetreCarre = 'metreCarre',
  MegaWattHeure = 'megaWattHeure',}

export interface FicheSolution {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    titre: string;
    slug: string;
    image_principale?: { data: Media };
    solution_retour_experiences: { data: SolutionRetourExperience[] };
    cout_minimum?: number;
    cout_maximum?: number;
    type_solution?: TypeSolution;
    description_courte: string;
    description: any;
    baisse_temperature?: number;
    contexte_titre: string;
    contexte_description: any;
    rafraichissement_attendu_description?: any;
    logo_partenaire?: { data: Media };
    cout_minimum_entretien?: number;
    cout_maximum_entretien?: number;
    etapes_mise_en_oeuvre: EtapeMiseEnOeuvre[];
    etapes_entretien: EtapeEntretien[];
    point_vigilance?: any;
    lien_aide_territoire?: string;
    lien_fond_vert?: string;
    types_espace?: any;
    etapes_diagnostic: EtapeDiagnostic[];
    aides_regionales: AideRegionale[];
    rank?: number;
    materiaux?: { data: Materiau[] };
    fiches_solutions_complementaires: { data: FicheSolution[] };
    cobenefices?: { data: Cobenefice[] };
    oups: Oups[];
    cout_entretien_description?: any;
    delai_travaux_minimum?: number;
    delai_travaux_maximum?: number;
    portee_baisse_temperature?: PorteeBaisseTemperature;
    cout_entretien_unite?: CoutEntretienUnite;
    en_savoir_plus?: any;
    libelle_avantage_solution?: string;
    credits?: any;
    cout_unite?: CoutUnite;
    description_estimation?: any;
    aides_territoires_mots_cles?: string;
  };
}
export interface FicheSolution_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  slug: string;
  image_principale?: Media_Plain;
  solution_retour_experiences: SolutionRetourExperience_Plain[];
  cout_minimum?: number;
  cout_maximum?: number;
  type_solution?: TypeSolution;
  description_courte: string;
  description: any;
  baisse_temperature?: number;
  contexte_titre: string;
  contexte_description: any;
  rafraichissement_attendu_description?: any;
  logo_partenaire?: Media_Plain;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  etapes_mise_en_oeuvre: EtapeMiseEnOeuvre_Plain[];
  etapes_entretien: EtapeEntretien_Plain[];
  point_vigilance?: any;
  lien_aide_territoire?: string;
  lien_fond_vert?: string;
  types_espace?: any;
  etapes_diagnostic: EtapeDiagnostic_Plain[];
  aides_regionales: AideRegionale_Plain[];
  rank?: number;
  materiaux?: Materiau_Plain[];
  fiches_solutions_complementaires: FicheSolution_Plain[];
  cobenefices?: Cobenefice_Plain[];
  oups: Oups_Plain[];
  cout_entretien_description?: any;
  delai_travaux_minimum?: number;
  delai_travaux_maximum?: number;
  portee_baisse_temperature?: PorteeBaisseTemperature;
  cout_entretien_unite?: CoutEntretienUnite;
  en_savoir_plus?: any;
  libelle_avantage_solution?: string;
  credits?: any;
  cout_unite?: CoutUnite;
  description_estimation?: any;
  aides_territoires_mots_cles?: string;
}

export interface FicheSolution_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  slug: string;
  image_principale?: number;
  solution_retour_experiences: number[];
  cout_minimum?: number;
  cout_maximum?: number;
  type_solution?: TypeSolution;
  description_courte: string;
  description: any;
  baisse_temperature?: number;
  contexte_titre: string;
  contexte_description: any;
  rafraichissement_attendu_description?: any;
  logo_partenaire?: number;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  etapes_mise_en_oeuvre: EtapeMiseEnOeuvre_NoRelations[];
  etapes_entretien: EtapeEntretien_NoRelations[];
  point_vigilance?: any;
  lien_aide_territoire?: string;
  lien_fond_vert?: string;
  types_espace?: any;
  etapes_diagnostic: EtapeDiagnostic_NoRelations[];
  aides_regionales: AideRegionale_NoRelations[];
  rank?: number;
  materiaux?: number[];
  fiches_solutions_complementaires: number[];
  cobenefices?: number[];
  oups: Oups_NoRelations[];
  cout_entretien_description?: any;
  delai_travaux_minimum?: number;
  delai_travaux_maximum?: number;
  portee_baisse_temperature?: PorteeBaisseTemperature;
  cout_entretien_unite?: CoutEntretienUnite;
  en_savoir_plus?: any;
  libelle_avantage_solution?: string;
  credits?: any;
  cout_unite?: CoutUnite;
  description_estimation?: any;
  aides_territoires_mots_cles?: string;
}

export interface FicheSolution_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  slug: string;
  image_principale?: AdminPanelRelationPropertyModification<Media_Plain>;
  solution_retour_experiences: AdminPanelRelationPropertyModification<SolutionRetourExperience_Plain>;
  cout_minimum?: number;
  cout_maximum?: number;
  type_solution?: TypeSolution;
  description_courte: string;
  description: any;
  baisse_temperature?: number;
  contexte_titre: string;
  contexte_description: any;
  rafraichissement_attendu_description?: any;
  logo_partenaire?: AdminPanelRelationPropertyModification<Media_Plain>;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  etapes_mise_en_oeuvre: EtapeMiseEnOeuvre_Plain[];
  etapes_entretien: EtapeEntretien_Plain[];
  point_vigilance?: any;
  lien_aide_territoire?: string;
  lien_fond_vert?: string;
  types_espace?: any;
  etapes_diagnostic: EtapeDiagnostic_Plain[];
  aides_regionales: AideRegionale_Plain[];
  rank?: number;
  materiaux?: AdminPanelRelationPropertyModification<Materiau_Plain>;
  fiches_solutions_complementaires: AdminPanelRelationPropertyModification<FicheSolution_Plain>;
  cobenefices?: AdminPanelRelationPropertyModification<Cobenefice_Plain>;
  oups: Oups_Plain[];
  cout_entretien_description?: any;
  delai_travaux_minimum?: number;
  delai_travaux_maximum?: number;
  portee_baisse_temperature?: PorteeBaisseTemperature;
  cout_entretien_unite?: CoutEntretienUnite;
  en_savoir_plus?: any;
  libelle_avantage_solution?: string;
  credits?: any;
  cout_unite?: CoutUnite;
  description_estimation?: any;
  aides_territoires_mots_cles?: string;
}
