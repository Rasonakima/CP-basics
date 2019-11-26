import { Level } from "./Level";

export class Group {
  public static ids: string[];
  constructor(public id: string, public levels: Array<Level>) {}
}
