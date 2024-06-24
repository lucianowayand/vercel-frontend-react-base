import { CoreDTO } from "./core.dto";
import { LearningTypeDTO } from "./learning-type.dto";
import { QuestionaryDTO } from "./questionary.dto";

export interface ModelDTO extends CoreDTO {
  name: string;
  description: string;
  questionaries?: QuestionaryDTO[];
  learningTypes?: LearningTypeDTO[];
}
