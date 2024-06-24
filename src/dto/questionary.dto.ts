import { CoreDTO } from "./core.dto";
import { LearningTypeDTO } from "./learning-type.dto";

export interface QuestionaryDTO extends CoreDTO {
  name: string;
  modelId: string;
  questions?: QuestionDTO[];
}

export interface QuestionDTO extends CoreDTO {
  questionaryId: string;
  text: string;
  answers?: AnswerDTO[];
}

export interface AnswerDTO extends CoreDTO {
  questionId: string;
  text: string;
  learningTypeId: string;
  learningType: LearningTypeDTO;
}
