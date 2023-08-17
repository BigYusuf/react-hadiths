import { Base } from "../base";
import { HadithTypes } from "./types";

export class Hadiths extends Base {
    getHadithById( id: string ): Promise<HadithTypes> {
        return this.invoke(`/hadiths/${id}`)
    }
    getAllHadiths(): Promise<HadithTypes> {
        return this.invoke(`/hadiths`)
    }
    getHadithsByCollection(collectionName: string): Promise<HadithTypes> {
        return this.invoke(`/hadiths?collection=${collectionName}`)
    }
    getHadithsByCategory(collectionName: string, categoryName: string): Promise<HadithTypes> {
        return this.invoke(`/hadiths?collection=${collectionName}&category=${categoryName}`)
    }
    searchHadiths(searchQuery: string): Promise<HadithTypes> {
        return this.invoke(`/hadiths?search=${searchQuery}`)
    }
}