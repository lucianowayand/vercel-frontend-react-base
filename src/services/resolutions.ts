import { AxiosResponse } from "axios";
import { api } from "./axios";
import { AnswerDTO } from "../dto/questionary.dto";
import { ResolutionDTO } from "../dto/resolution.dto";

const create = ({
  questionaryId,
  resolution,
}: {
  questionaryId: string;
  resolution: AnswerDTO[];
}): Promise<AxiosResponse<ResolutionDTO[]>> => {
  return api.post("/resolutions", { questionaryId, resolution });
};

const findByModelId = (
  modelId: string
): Promise<AxiosResponse<ResolutionDTO[]>> => {
  return api.get(`/resolutions/model/${modelId}`);
};

const fetchAll = (): Promise<AxiosResponse<ResolutionDTO[]>> => {
  return api.get(`/resolutions`);
};

export const ResolutionService = {
  create,
  findByModelId,
  fetchAll,
};
