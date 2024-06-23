import { CoreDTO } from "./core.dto";
import { QuestionaryDTO } from "./questionary.dto";

export interface ModelDTO extends CoreDTO {
  name: string;
  description: string;
  questionaries: QuestionaryDTO[];
}
