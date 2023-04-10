import {msg,notification} from "./msgOne"
let message=new notification("pavi","pink")
console.log(message.successFn("Green"))
console.log(message.warningFn("yellow"))
console.log(message.notificationFn("blue"))
console.log(message.errorFn("Red"))