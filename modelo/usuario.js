module.exports=class Usuario{
    constructor(email,pass){
    this.email=email;
    this.pass=pass;
    }
    setEmail(e){
        this.email=e
    }
    getEmail(){
        return this.email
    }
    setPass(e){
        this.pass=e
    }
    getPass(){
        return this.pass
    }

}