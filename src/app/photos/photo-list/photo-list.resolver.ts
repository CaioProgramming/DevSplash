import { Injectable } from "@angular/core";
import { PhotoService } from "../photo/photoservice";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photoData";

@Injectable({providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {


  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const username = route.params['username'];
    return this.service.listFromUserPaginated(username, 1);
  }

}
