// interface IPerson{
//     name: string;
//     age: number;
//     speak: (a: string) => void;
//     spend: (a: number) => number;
// }
// const me : IPerson = {
//     name: "Mario",
//     age: 10,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(rent: number): number{
//         return rent;
//     }
// };
// const greet = (peron: IPerson): void => {
//     console.log(`Hi, ${peron.name}`);
// }
// greet(me);
import { ListTemplate } from "./classes/ListTemplate.js";
import { invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new invoice("Mario", "Bill", 100);
// docTwo = new Payment("Luigi", "Payment", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new invoice("Mario", "work on mario website", 100);
// const invTwo = new invoice("Luigi", "work on luigi website", 50);
// let invoices: invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
let ul = document.querySelector("ul");
let listTemp = new ListTemplate(ul);
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new invoice(...values);
    }
    else
        (type.value === "payment");
    {
        doc = new Payment(...values);
    }
    //console.log(doc)
    listTemp.render(doc, type.value, "end");
});
const addUid = (obj) => {
    let uid = Math.floor(100 * Math.random());
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUid({ name: "abc", age: 39 });
console.log(doc1);
