import { CoreDTO } from "./core.dto";

export interface QuestionaryDTO extends CoreDTO {
  name: string;
  modelId: string;
}
