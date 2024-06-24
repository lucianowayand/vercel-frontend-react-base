import { CoreDTO } from "./core.dto";
import { LearningTypeDTO } from "./learning-type.dto";

export interface ResolutionDTO extends CoreDTO {
  questionaryId: string;
  userId: string;
  learningTypeId: string;
  learningType: LearningTypeDTO;
}
