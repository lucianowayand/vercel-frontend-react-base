import { AxiosResponse } from "axios";
import { QuestionaryDTO } from "../dto/questionary.dto";
import { api } from "./axios";

const findById = (id: string): Promise<AxiosResponse<QuestionaryDTO>> => {
  return api.get(`/questionaries/${id}`);
};
export const QuestionaryService = { findById };
