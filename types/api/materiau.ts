// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { FicheSolution } from './fiche-solution';
import { Media_Plain } from '../common/Media';
import { FicheSolution_Plain } from './fiche-solution';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export enum CoutUnite {
  MetreCarre = 'metreCarre',
  Lineaire = 'lineaire',
  MetreCube = 'metreCube',
  Unite = 'unite',
  MegaWattHeure = 'megaWattHeure',
  KiloWatt = 'kiloWatt',}

export interface Materiau {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    titre: string;
    image?: { data: Media };
    description: any;
    cout_minimum_fourniture?: number;
    cout_maximum_fourniture?: number;
    cout_minimum_entretien?: number;
    cout_maximum_entretien?: number;
    cout_unite: CoutUnite;
    fiches_solution?: { data: FicheSolution[] };
  };
}
export interface Materiau_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: Media_Plain;
  description: any;
  cout_minimum_fourniture?: number;
  cout_maximum_fourniture?: number;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  cout_unite: CoutUnite;
  fiches_solution?: FicheSolution_Plain[];
}

export interface Materiau_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: number;
  description: any;
  cout_minimum_fourniture?: number;
  cout_maximum_fourniture?: number;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  cout_unite: CoutUnite;
  fiches_solution?: number[];
}

export interface Materiau_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: AdminPanelRelationPropertyModification<Media_Plain>;
  description: any;
  cout_minimum_fourniture?: number;
  cout_maximum_fourniture?: number;
  cout_minimum_entretien?: number;
  cout_maximum_entretien?: number;
  cout_unite: CoutUnite;
  fiches_solution?: AdminPanelRelationPropertyModification<FicheSolution_Plain>;
}
