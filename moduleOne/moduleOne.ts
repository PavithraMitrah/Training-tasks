import { userName, userEmail, userPassword } from "./interface"
export class name implements userName, userEmail, userPassword {
    name: string;
    age: number;
    email: string;
    password: any;
    // constructor() {
    //     this.name = name;
    //     this.age = age;
    //     this.email = email;
    //     this.password = password;
    // }
    nameValidate(a: userName): string {
        return a.name
    }
    emailValidate(a: userEmail): boolean {
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        return (emailRegex.test(a.email))
    }
    passwordValidate(a: userPassword): boolean {
        let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,30}$/;
        return (passwordRegex.test(a.password))
    }
    checkValidation(a: any, b: any, c: any): any {
        var arr = [
            {
                name: "bbb",
                email: "yyy@gmail.com",
                password: "123@Mp321"
            },
            {
                name: "pa",
                email: "pav@gmail.com",
                password: "123@Mp321"
            }
        ];
        var index;
        var value = (arr.filter((ele, i) => {
            if (ele.name === a.name && ele.email === b.email && ele.password) {
                return (index = i)
            }
        }))
        if (value.length > 0) {
            var x = value.map((ele) => {
                ele["Id"] = index;
                return ele;
            })
            return x
        }
        else{
            return "The user is not exist"
        }
    }
    add(a:number,b:number):any{
        return a+b
    }
}
export class employee extends name{

constructor(private data:name){
    super()
}
test(){
    this.data.add(1,2)
}
}