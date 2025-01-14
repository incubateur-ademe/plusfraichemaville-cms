// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { FicheSolution } from './fiche-solution';
import { RetourExperience } from './retour-experience';
import { Media_Plain } from '../common/Media';
import { FicheSolution_Plain } from './fiche-solution';
import { RetourExperience_Plain } from './retour-experience';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface SolutionRetourExperience {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    titre: string;
    image?: { data: Media };
    fiche_solution?: { data: FicheSolution };
    retour_experience?: { data: RetourExperience };
    description?: any;
  };
}
export interface SolutionRetourExperience_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: Media_Plain;
  fiche_solution?: FicheSolution_Plain;
  retour_experience?: RetourExperience_Plain;
  description?: any;
}

export interface SolutionRetourExperience_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: number;
  fiche_solution?: number;
  retour_experience?: number;
  description?: any;
}

export interface SolutionRetourExperience_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  titre: string;
  image?: AdminPanelRelationPropertyModification<Media_Plain>;
  fiche_solution?: AdminPanelRelationPropertyModification<FicheSolution_Plain>;
  retour_experience?: AdminPanelRelationPropertyModification<RetourExperience_Plain>;
  description?: any;
}