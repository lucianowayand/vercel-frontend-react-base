import { AxiosResponse } from "axios";
import { api } from "./axios";
import { ModelDTO } from "../dto/model.dto";

const findAll = (): Promise<AxiosResponse<ModelDTO[]>> => {
  return api.get("/models");
};

const findById = (id: string): Promise<AxiosResponse<ModelDTO>> => {
  return api.get(`/models/${id}`);
};

export const ModelService = {
  findAll,
  findById,
};
