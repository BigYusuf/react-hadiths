import { Base } from "src/base";
import { Hadith } from "./types";

export class Hadiths extends Base {
    getHadithsById( id: string ): Promise<Hadith> {
        return this.invoke(`/hadiths/${id}`)
    }
    geAlltHadiths(): Promise<Hadith> {
        return this.invoke(`/hadiths`)
    }
}