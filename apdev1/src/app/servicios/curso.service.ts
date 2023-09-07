import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { cursoBD } from "../modelos/curso";
import { Global } from "./global";

@Injectable()
export class save_cursoService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    testService(){
        return'Probando el servicio de Angular';
    }
    saveCurso(curso: cursoBD): Observable<any>{
        let parms = JSON.stringify(curso);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.post(this.url+'save-curso', parms,{headers: headers});    

    } 
   getCursos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url+'cursos', {headers: headers});    
    } 
    getCurso(): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url+'curso/'+id, {headers: headers});    
    } 
    deleteCurso(id: string): Observable<any>{
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.delete(this.url+'curso/'+id, {headers: headers});   
    }
    updateCurso(curso: any): Observable<any>{
        let parms = JSON.stringify(curso);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.put(this.url+'curso/'+curso._id, parms,{headers: headers});    
    } 
}