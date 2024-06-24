import { CoreDTO } from "./core.dto";

export interface UserDTO extends CoreDTO {
  email: string;
  name: string;
  password: string;
}
