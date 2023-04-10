export class msg{
    name:string;
    color:string
    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
    }
    successFn(a:string){
        return `Success msg : ${this.name} (${a}) successfully login`
    }
    warningFn(a:string){
        return `Warning : ${this.name} (${a}) login your detail on time`
    }
    notificationFn(a:string){
        return `Notification : ${this.name} (${a}) please login your details`
    }
    errorFn(a:string){
        return `Error msg : ${this.name} (${a}) login is incorrect`
    }
}
export class notification extends msg{
    constructor(name:string,color:string){
        super(name,color)
    }
}
