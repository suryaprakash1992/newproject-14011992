import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
 
  
  @ViewChild('userName', {static: true}) userName: ElementRef;
  @ViewChild('userEmail', {static: true}) userEmail: ElementRef;
  @ViewChild('mailSubject', {static: true}) mailSubject: ElementRef;
  @ViewChild('query', {static: true}) query: ElementRef;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(){
    let name:string=this.userName.nativeElement.value;
    let email:string=this.userEmail.nativeElement.value;
    let subject:string=this.mailSubject.nativeElement.value;
    let userQuery:string=this.query.nativeElement.value;
    const params = new HttpParams()
    .set('name', name)
    .set('usermailid', email)
    .set('mailSubject',subject)
    .set('userQuery',userQuery)
    this.http.get("http://localhost:4444/api/Mail/SentEmail",{params}).
    map(data=>console.log(data))
    
    
    debugger;
  }

}
