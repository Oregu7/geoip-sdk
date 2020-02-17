import { get } from 'request-promise';

export interface Geolocation {
    country: string,
    city: string,
    lat: string,
    lng: string,
}

export class Geoip {
    private apiUrl: string = "http://185.209.162.189:3000/";
    constructor(apiUrl?: string) {
        if(apiUrl)
            this.apiUrl = apiUrl;
    }

    async getLocation(ip: string): Promise<Geolocation> {
        const qs = { ip };
        const data = await get(this.apiUrl, { qs });
        return data;
    }
}