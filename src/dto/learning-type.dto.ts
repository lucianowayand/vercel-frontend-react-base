import { CoreDTO } from "./core.dto";

export interface LearningTypeDTO extends CoreDTO {
  name: string;
  description: string;
  modelId: string;
}
