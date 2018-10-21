import { Subject } from 'rxjs';
import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({providedIn:'root'})
export class PhotoService {

    constructor(public http:Http){}
    getAllPhotos(): Promise<any> {
        return this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json').toPromise();
    }

    getAllFlickrPhotos(): Promise<any> {
        return this.http.get('http://localhost:3000/api/flickr-photos')
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);;
    }

    searchAllFlickrPhotos(searchText): Promise<any> {
        return this.http.get('http://localhost:3000/api/flickr-photos-search/' + searchText)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);;
    }

    private extractData(res) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
