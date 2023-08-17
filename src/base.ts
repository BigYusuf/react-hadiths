import fetch from "isomorphic-unfetch";

type Config = {
    apiKey: string;
    baseUrl?: string;
}

export abstract class Base {
    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config){
        this.apiKey = config.apiKey
        this.baseUrl = config.baseUrl || "https://hadiths-api.p.rapidapi.com"
    }
    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const headers = {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": "hadiths-api.p.rapidapi.com",
            "X-RapidAPI-Key": this.apiKey,
        }
        const config = {
            ...options,
            headers
        } 

        return fetch(url, config).then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        })
    }
}