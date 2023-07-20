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
import { HasFormatter } from "./interfaces/HasFormatter.js";

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

let ul = document.querySelector("ul")!;
let listTemp = new ListTemplate(ul);

let form = document.querySelector(".new-item-form") as HTMLFormElement;

let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if(type.value === "invoice"){
        doc = new invoice(...values);
    }
    else (type.value === "payment")
    {
        doc = new Payment(...values)
    }
    //console.log(doc)
    listTemp.render(doc, type.value, "end");
})


const addUid = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(100 * Math.random());
    return {...obj, uid};
}

let doc1 = addUid({name: "abc", age: 39});

console.log(doc1);