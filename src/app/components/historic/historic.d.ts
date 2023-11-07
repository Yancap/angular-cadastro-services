import { Course } from '../../models/forms';

export interface HistoricStack extends Course{
  modified_at: number;
  type: "create" | "update" | "delete";
  mappedUpdate?: string;
}