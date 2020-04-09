import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Menu } from '../Models/menu';
import { Observable, from } from 'rxjs';
import {URL} from '../../environments/environment';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({ 
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus( ): Observable<Menu[]>{
    return this.http.get<Menu []>(URL+'/menus').pipe();

  }

  getMenu( id : Number) : Observable<Menu>
  {
    return this.http.get<Menu>(URL+'/menus/'+id).pipe();
  }

  postMenu( menu : Menu) : Observable<Menu>
  {
    return this.http.post<Menu>(URL+'/menus',menu).pipe();
  }

  deleteMenu(id: Number) : Observable<Menu>
  {
    return this.http.delete<Menu>(URL+'/menus/'+id).pipe();
  }
  updateMenu( menu: Menu, id: Number)
  {
    return this.http.put<Menu>(URL+'/menus/'+id,menu).pipe();
  }
}
