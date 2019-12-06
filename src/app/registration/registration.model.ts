export class Registration {
    public username : string ;
    public password : string;
    public email: string;
    public address : string;

    constructor(name : string, email : string , address : string , password : string){
        this.username = name;
        this.email=email;
        this.address=address;
        this.password=password;

    }
}