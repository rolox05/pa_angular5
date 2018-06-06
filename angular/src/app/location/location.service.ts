import { RestBaseService, PagedResults } from "../tools/rest.tools";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Http } from "@angular/http";
import { Location } from "./location.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LocationService extends RestBaseService {
    private url = "location";

    constructor(private http: Http) {
        super();
    }

    getLocations(): Observable<PagedResults<Location>> {
        return this.http.get(
            LocationService.serverUrl + this.url,
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Location>(resp));
    }

    getFilteredLocations(param: Object): Observable<PagedResults<Location>> {
        if (!param) {
            return this.getLocations();
        }
        return this.http.get(
            LocationService.serverUrl + this.url + this.buildFilterParams(param),
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Location>(resp));
    }

    getLocation(param: Object): Observable<Location> {
        return this.http.get(
            LocationService.serverUrl + this.url + "/" + param["id"],
            this.getPublicRestHeader()
          )
          .map(resp => {
            return resp.json() as Location;
          });
    }
}