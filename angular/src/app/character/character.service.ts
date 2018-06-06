import { RestBaseService, PagedResults } from "../tools/rest.tools";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Http } from "@angular/http";
import { Character } from "./character.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CharacterService extends RestBaseService {
    private url = "character";

    constructor(private http: Http) {
        super();
    }

    getCharacters(): Observable<PagedResults<Character>> {
        return this.http.get(
            CharacterService.serverUrl + this.url,
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Character>(resp));
    }

    getFilteredCharacters(param: Object): Observable<PagedResults<Character>> {
        if (!param) {
            return this.getCharacters();
        }
        return this.http.get(
            CharacterService.serverUrl + this.url + this.buildFilterParams(param),
            this.getPublicRestHeader()
          )
          .map(resp => this.getPagedResponse<Character>(resp));
    }

    getCharacter(param: Object): Observable<Character> {
        return this.http.get(
            CharacterService.serverUrl + this.url + "/" + param["id"],
            this.getPublicRestHeader()
          )
          .map(resp => {
            return resp.json() as Character;
          });
    }
}