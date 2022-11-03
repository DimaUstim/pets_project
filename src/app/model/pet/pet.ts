import { PetStatus } from './pet-status';
import { PetGender } from './pet-gender';
import { PetType } from './pet-type';

export interface Pet {
  id?: string;
  name?: string;
  description?: string;
  periodInfo?: Date;
  gender?: PetGender;
  status?: PetStatus;
  petType?: PetType;
  image?: string;
}
