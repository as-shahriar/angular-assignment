(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OpKh:function(e,i,r){"use strict";r.r(i),r.d(i,"AuthenticationModule",function(){return g});var t=r("ofXK"),s=r("tyNb"),n=r("3Pt+"),a=r("fXoL"),o=r("lJxs"),l=r("tk/3");let b=(()=>{class e{constructor(e){this.http=e}getAll(){return this.http.get("api/users")}getAllProfile(){return this.http.get("api/profiles")}is_authenticated(e,i){let r=e.split("@")[0];return this.http.get("api/users/?email="+r).pipe(Object(o.a)(r=>{let t=null;return r.every(r=>r.email!==e||r.password!==i||(t={id:r.id,is_admin:r.is_admin},!1)),localStorage.setItem("user",JSON.stringify(t)),t}))}isUnique(e){let i=e.split("@")[0],r=!0;return this.http.get("api/users/?email="+i).pipe(Object(o.a)(i=>(i.every(i=>i.email!==e||(r=!1,!1)),!!r)))}signup(e){return this.http.post("api/users",e)}createProfile(e){return this.http.post("api/profiles",e)}}return e.\u0275fac=function(i){return new(i||e)(a.Sb(l.c))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,i){1&e&&(a.Ob(0,"div",11),a.kc(1," Invalid Credentials. Try Again. "),a.Nb())}function u(e){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(e.value)?null:{invalid:!0}}function c(e,i){1&e&&(a.Ob(0,"span"),a.kc(1," Email address is required."),a.Nb())}function d(e,i){1&e&&(a.Ob(0,"span"),a.kc(1,"Email is already exists."),a.Nb())}function p(e,i){1&e&&(a.Ob(0,"div",24),a.kc(1," You need to choose a role. "),a.Nb())}const f=[{path:"login",component:(()=>{class e{constructor(e,i,r){this.fb=e,this.service=i,this.router=r,this.is_submitted=!1,this.error=!1,this.loginForm=this.fb.group({email:["",[n.k.required,n.k.email]],password:["",[n.k.required,n.k.minLength(8)]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){this.is_submitted=!0,this.loginForm.invalid||this.service.is_authenticated(this.loginForm.value.email,this.loginForm.value.password).subscribe(e=>{null==e?this.error=!0:this.router.navigate(e.is_admin?["user","dashboard"]:["user"])})}}return e.\u0275fac=function(i){return new(i||e)(a.Jb(n.b),a.Jb(b),a.Jb(s.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-login"]],decls:18,vars:6,consts:[[1,"d-flex","flex-column","align-items-center","mt-3"],[1,"my-4"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"w-50",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],[1,"invalid-feedback"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],["type","submit","value","Login",1,"btn","btn-outline-success"],["role","alert",1,"alert","alert-danger"]],template:function(e,i){1&e&&(a.Ob(0,"div",0),a.Ob(1,"h2",1),a.kc(2,"Login"),a.Nb(),a.jc(3,m,2,0,"div",2),a.Ob(4,"form",3),a.Vb("ngSubmit",function(){return i.onSubmit()}),a.Ob(5,"div",4),a.Ob(6,"label",5),a.kc(7,"Email Address"),a.Nb(),a.Kb(8,"input",6),a.Ob(9,"div",7),a.kc(10," Email address is required. "),a.Nb(),a.Nb(),a.Ob(11,"div",4),a.Ob(12,"label",8),a.kc(13,"Password"),a.Nb(),a.Kb(14,"input",9),a.Ob(15,"div",7),a.kc(16," Password is required with minimum 8 characters. "),a.Nb(),a.Nb(),a.Kb(17,"input",10),a.Nb(),a.Nb()),2&e&&(a.zb(3),a.bc("ngIf",i.error),a.zb(1),a.bc("formGroup",i.loginForm),a.zb(4),a.Bb("is-invalid",i.email&&(i.email.invalid&&i.email.touched||i.is_submitted&&i.email.invalid)),a.zb(6),a.Bb("is-invalid",i.password&&(i.password.invalid&&i.password.touched||i.is_submitted&&i.password.invalid)))},directives:[t.j,n.m,n.f,n.d,n.a,n.e,n.c],styles:[""]}),e})()},{path:"signup",component:(()=>{class e{constructor(e,i,r){this.fb=e,this.service=i,this.router=r,this.is_submitted=!1,this.signupForm=this.fb.group({fname:["",n.k.required],lname:["",n.k.required],email:["",[n.k.required,n.k.email]],password:["",u],role:["",n.k.required]})}get fname(){return this.signupForm.get("fname")}get lname(){return this.signupForm.get("lname")}get email(){return this.signupForm.get("email")}get password(){return this.signupForm.get("password")}get role(){return this.signupForm.get("role")}onSubmit(){if(this.is_submitted=!0,!this.signupForm.invalid){let e="admin"===this.signupForm.value.role;this.service.isUnique(this.signupForm.value.email).subscribe(i=>{i?this.service.signup({email:this.signupForm.value.email,password:this.signupForm.value.password,is_admin:e}).subscribe(e=>{e&&this.service.createProfile({fname:this.signupForm.value.fname,lname:this.signupForm.value.lname,date_of_birth:null,gender:null,phone:null,address:null,interest:null}).subscribe(e=>{e&&this.router.navigate(["auth","login"])})}):this.email.setErrors({notUnique:!0})})}}}return e.\u0275fac=function(i){return new(i||e)(a.Jb(n.b),a.Jb(b),a.Jb(s.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-signup"]],decls:51,vars:12,consts:[[1,"d-flex","flex-column","align-items-center","mt-3"],[1,"my-4"],[1,"w-50",3,"formGroup","ngSubmit"],[1,"row"],[1,"col","col-lg-6","col-12"],[1,"form-group"],["for","fname"],["type","text","formControlName","fname","id","fname",1,"form-control"],[1,"invalid-feedback"],["for","lname"],["type","text","formControlName","lname","id","lname",1,"form-control"],["for","email"],["type","email","formControlName","email","id","email",1,"form-control"],[4,"ngIf"],["for","password"],["type","password","formControlName","password","id","password",1,"form-control"],[1,"d-flex","justify-content-center"],[1,"form-check","form-check-inline"],["type","radio","name","role","formControlName","role","checked","true","id","exampleRadios1","value","user",1,"form-check-input"],["for","exampleRadios1",1,"form-check-label"],["type","radio","name","role","formControlName","role","id","exampleRadios2","value","admin",1,"form-check-input"],["for","exampleRadios2",1,"form-check-label"],["class","invalid-feedback","style","display: block; text-align: center;",4,"ngIf"],["type","submit","value","Sign up",1,"btn","btn-outline-success","mt-2"],[1,"invalid-feedback",2,"display","block","text-align","center"]],template:function(e,i){1&e&&(a.Ob(0,"div",0),a.Ob(1,"h2",1),a.kc(2,"Sign up"),a.Nb(),a.Ob(3,"form",2),a.Vb("ngSubmit",function(){return i.onSubmit()}),a.Ob(4,"div",3),a.Ob(5,"div",4),a.Ob(6,"div",5),a.Ob(7,"label",6),a.kc(8,"First Name"),a.Nb(),a.Kb(9,"input",7),a.Ob(10,"div",8),a.kc(11," First name is required. "),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"div",4),a.Ob(13,"div",5),a.Ob(14,"label",9),a.kc(15,"Last Name"),a.Nb(),a.Kb(16,"input",10),a.Ob(17,"div",8),a.kc(18," Last name is required. "),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(19,"div",5),a.Ob(20,"label",11),a.kc(21,"Email Address"),a.Nb(),a.Kb(22,"input",12),a.Ob(23,"div",8),a.jc(24,c,2,0,"span",13),a.jc(25,d,2,0,"span",13),a.Nb(),a.Nb(),a.Ob(26,"div",5),a.Ob(27,"label",14),a.kc(28,"Password"),a.Nb(),a.Kb(29,"input",15),a.Ob(30,"div",8),a.kc(31," Password is required with minimum 8 characters which conatins at "),a.Kb(32,"br"),a.kc(33," - one lowercase alphabetical character,"),a.Kb(34,"br"),a.kc(35," - one uppercase alphabetical character,"),a.Kb(36,"br"),a.kc(37," - one numeric character,"),a.Kb(38,"br"),a.kc(39," - one special character. "),a.Nb(),a.Nb(),a.Ob(40,"div",16),a.Ob(41,"div",17),a.Kb(42,"input",18),a.Ob(43,"label",19),a.kc(44," User "),a.Nb(),a.Nb(),a.Ob(45,"div",17),a.Kb(46,"input",20),a.Ob(47,"label",21),a.kc(48," Admin "),a.Nb(),a.Nb(),a.Nb(),a.jc(49,p,2,0,"div",22),a.Kb(50,"input",23),a.Nb(),a.Nb()),2&e&&(a.zb(3),a.bc("formGroup",i.signupForm),a.zb(6),a.Bb("is-invalid",i.fname&&(i.fname.invalid&&i.fname.touched||i.is_submitted&&i.fname.invalid)),a.zb(7),a.Bb("is-invalid",i.lname&&(i.lname.invalid&&i.lname.touched||i.is_submitted&&i.lname.invalid)),a.zb(6),a.Bb("is-invalid",i.email&&(i.email.invalid&&i.email.touched||i.is_submitted&&i.email.invalid)),a.zb(2),a.bc("ngIf",i.email.errors&&!i.email.errors.notUnique),a.zb(1),a.bc("ngIf",i.email.errors&&i.email.errors.notUnique),a.zb(4),a.Bb("is-invalid",i.password&&(i.password.invalid&&i.password.touched||i.is_submitted&&i.password.invalid)),a.zb(20),a.bc("ngIf",i.role&&i.role.invalid&&i.is_submitted))},directives:[n.m,n.f,n.d,n.a,n.e,n.c,t.j,n.h],styles:[".form-check-input[_ngcontent-%COMP%], .form-check-label[_ngcontent-%COMP%]{cursor:pointer}"]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(i){return new(i||e)},imports:[[s.e.forChild(f)],s.e]}),e})(),g=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(i){return new(i||e)},providers:[b],imports:[[t.b,h,n.i]]}),e})()}}]);