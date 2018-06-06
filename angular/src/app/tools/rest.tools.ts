import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { environment } from "../../environments/environment";

export class RestBaseService {
  public static serverUrl = environment.serverBase;

  protected handleError(error: Response | any) {
    /*    if (error && (error.status == 401 || error.status == 0) && window.location.pathname != "/") {
          window.location.assign(RestBaseService.serverUrl);
        }*/

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      return Promise.reject(body);
    } else {
      errMsg = error.message ? error.message : error.toString();
      return Promise.reject(errMsg);
    }
  }

  protected getRestHeader(): RequestOptions {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "bearer " + localStorage.getItem("auth_token")
    });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return options;
  }

  protected getPublicRestHeader(): RequestOptions {
    const headers = new Headers({
    });
    const options = new RequestOptions({ headers: headers, withCredentials: false });
    return options;
  }

  protected buildFilterParams(params: Object): string {
    let paramString: string = "";
    Object.keys(params).forEach((param, index) => {
      if (!params[param]) return;
      paramString += (paramString.length > 0 ? "&" : "?") + param + "=" + params[param];
    });
    return paramString;
  }

  protected getPagedResponse<T>(resp: any): PagedResults<T> {
    let partial: PagedResults<T>;
    if (resp.message) {
      partial = {
        info: new ResultInfo(),
        results: [] as T[]
      };
    } else {
      const parsed = resp.json();
      let info: ResultInfo = {
        count: parseInt(parsed.info.count),
        next: parsed.info.next ? parseInt(parsed.info.next.split("page=")[1]) : 0,
        pages: parseInt(parsed.info.pages),
        prev: parsed.info.prev ? parseInt(parsed.info.prev.split("page=")[1]) : 0,
        current: 0
      };
      partial = {
        info: info,
        results: parsed.results as T[]
      };
      partial.info.current = partial.info.next ? partial.info.next - 1 : partial.info.prev + 1;
    }
    return partial as PagedResults<T>;
  }
}

export class ResultInfo {
  count: number;
  next: number;
  pages: number;
  prev: number;
  current: number;
}

export class PagedResults<T> {
  info: ResultInfo;
  results: T[];
}