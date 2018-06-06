import { RestBaseService, PagedResults } from "../tools/rest.tools";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Http } from "@angular/http";
import { Episode } from "./episode.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EpisodeService extends RestBaseService {
    private url = "episode";

    constructor(private http: Http) {
        super();
    }

    getEpisodes(): Observable<PagedResults<Episode>> {
        return this.http.get(
            EpisodeService.serverUrl + this.url,
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Episode>(resp));
          /*.catch(err => {
              return {} as PagedResults<Episode>;
          });*/
    }

    getFilteredEpisodes(param: Object): Observable<PagedResults<Episode>> {
        if (!param) {
            return this.getEpisodes();
        }
        return this.http.get(
            EpisodeService.serverUrl + this.url + this.buildFilterParams(param),
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Episode>(resp));
          /*.catch(err => {
            return {} as PagedResults<Episode>;
        });*/
    }

    getEpisode(param: Object): Observable<Episode> {
        return this.http.get(
            EpisodeService.serverUrl + this.url + "/" + param["id"],
            this.getPublicRestHeader()
          )
          .map(resp => {
            return resp.json() as Episode;
          });
         /* .catch(err => {
              return {} as Episode;
          });*/
    }
}