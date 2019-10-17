import { Film } from "./film";

export interface Films {
  context: number;
  next: number;
  previous: number;
  results: Array<Film>;
}
