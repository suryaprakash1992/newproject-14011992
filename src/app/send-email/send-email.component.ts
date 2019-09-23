import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  i:number;
  country:string[];
  @ViewChild('userName', {static: true}) userName: ElementRef;
  @ViewChild('userEmail', {static: true}) userEmail: ElementRef;
  @ViewChild('mailSubject', {static: true}) mailSubject: ElementRef;
  @ViewChild('query', {static: true}) query: ElementRef;
  @ViewChild('contactNumber', {static: true}) contactNumber: ElementRef;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  //   this.http.get("https://restcountries.eu/rest/v2/all").subscribe(response=>{
  //     //this.countryCode=response;
  //     for(this.i=0;this.i<response.toString().length;this.i++){
  //       debugger;
  //       this.country[this.i]=response[this.i].name;
  //       console.log(response);
  //     }
     
  // })
  }
  onSubmit(){
    let name:string=this.userName.nativeElement.value;
    let email:string=this.userEmail.nativeElement.value;
    let subject:string=this.mailSubject.nativeElement.value;
    let userQuery:string=this.query.nativeElement.value;
    let contactNumber:string=this.contactNumber.nativeElement.value;
    const params = new HttpParams()
    .set('name', name)
    .set('usermailid', email)
    .set('mailsubject',subject)
    .set('contactnumber',contactNumber)
    .set('usermessage',userQuery)
    
    debugger;
    
    // this.http.get("http://localhost:4444/api/Mail/SentEmail",{params}).
    // map(data=>console.log(data))
    this.http.get("http://haircraftservices.azurewebsites.net/api/Mail/SentEmail",{params})
    .subscribe(response=>{
        console.log(response);
    })
    
    debugger;
  }

}
