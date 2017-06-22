import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:String;
    private client_id = '4ce30d28fee10f8d357e';
    private client_secret = '27e04f8d593915025f210c58ead0c5b90e2f3733';

    constructor(private _http:Http){
        console.log('Github service ready...');
        this.username = "buddhapuneeth";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }
    updateUser(username:String){
        this.username = username;
    }
}