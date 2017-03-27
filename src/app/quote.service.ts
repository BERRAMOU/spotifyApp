import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";
@Injectable()

export class QuoteService{
    constructor(private http: Http , private authService: AuthService){

    }

    getQuotes():Observable<any>{

        return this.http.get("http://127.0.0.1:8000/api/quotes")
            .map(
                (response: Response ) =>{
                   return response.json().quotes;
                }
            );
    }

    updateQuote(id: number , newContent: string){
        const token= this.authService.getToken();
        const body= JSON.stringify({ content: newContent});
        const headers = new Headers({'Content-Type' : 'application/json'});
        
        return this.http.put("http://127.0.0.1:8000/api/quote/"+id +"?token="+token, body , {headers: headers})
            .map(
                (response: Response) => response.json().quote
            );
    }

    deleteQuote(id: number){
        const token= this.authService.getToken();
        return this.http.delete("http://127.0.0.1:8000/api/quote/"+id+"?token="+token);
    }

    /**
     * @param ncontent
     * @returns {Observable<Response>}
     */

    addQuote(ncontent: string) {

        const token= this.authService.getToken();
        const body= JSON.stringify({ content: ncontent});
        const headers = new Headers({'Content-Type' : 'application/json'});

        return this.http.post("http://127.0.0.1:8000/api/quote?token="+token, body , {headers: headers});
    }

}