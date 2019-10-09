import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


// import * as _swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// const swal: SweetAlert = _swal as any;


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
  constructor(private http: HttpClient,
    public _formBuilder: FormBuilder,private _snackBar: MatSnackBar) {
    
   }
   formInfo = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    contactNum: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  get name() { return this.formInfo.get('name') }
  get email() { return this.formInfo.get('email') }
  

  ngOnInit() {
  //   this.http.get("http://localhost:4444/api/values/5").subscribe(response=>{
  //     debugger;
  //     this.countryCode=response;
  //     for(this.i=0;this.i<response.toString().length;this.i++){
  //       debugger;
  //       this.country[this.i]=response[this.i].name;
  //       console.log(response);
  //     }
     
  // },
  //  error => {
  //   debugger;
    
  //  })
  }
  contactForm(form) {
    this.http.post('https://haircraftservices.azurewebsites.net/api/Mail/SentEmail', form)
   // this.http.post('http://localhost:4444/api/Mail/SentEmail', form)
        .subscribe((resp) => {
          debugger;
          this._snackBar.open('Query Submitted Sucessfully','',{
            duration:3000,
            panelClass: ['red-snackbar']
          })
          //alert("sucess");
          //swal("Formulário de Contato", "Mensagem enviada com sucesso!", "success");
         // this.formInfo.reset();
        }, error => {
          debugger;
          this._snackBar.open('Failed to log the query','',{
            duration:3000,
            panelClass: ['red-snackbar']
          })
          //console.error(error, 'Opps: Houve um erro, tente novamente!');
        });
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
