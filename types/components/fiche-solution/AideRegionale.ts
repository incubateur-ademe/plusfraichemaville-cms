// Interface automatically generated by schemas-to-ts

import { Region } from '../../api/region';
import { Region_Plain } from '../../api/region';

export interface AideRegionale {
  region?: { data: Region };
  description: any;
  titre?: string;
}
export interface AideRegionale_Plain {
  region?: Region_Plain;
  description: any;
  titre?: string;
}

export interface AideRegionale_NoRelations {
  region?: number;
  description: any;
  titre?: string;
}

