export class UserProfile{
    public username : string;
    public email : string;
    public address : string;
    public bc1 : string;
    public bc2 : string;
    public bc1_balance : number;
    public bc2_balance : number;

    constructor(username : string, email : string, address : string,bc1 : string,bc2 : string,bc1_balance : number,bc2_balance : number){
        this.username=username;
        this.email=email;
        this.address=address;
        this.bc1=bc1;
        this.bc2 =bc2;
        this.bc1_balance=bc1_balance;
        this.bc2_balance=bc2_balance;
    }
}