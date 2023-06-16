// function calculate(num1:number, num2:number) {
//   return num1 + num2;
// }
// const ans = calculate(5, 6);
// console.log(ans);
// function getTotal(numbers:number[]) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }
// console.log(getTotal([1, 2, 3, 4]));
// const user = {
//   firstname: "Nikhil",
//   lastname: "lokare",
//   role: "professor",
// };
// console.log(user);
// Type alias
// type UserType = {
//   name: string;
//   age:number;
//   address?:string
// }
// const user:UserType = {
//   name:"Nikhil",
//   age : 98,
// }
// function login(userData:UserType): UserType{
//   return userData;
// }
// console.log(login({name:'Nikhil',age:20}));
// type ID = number | string;
// const user:ID = 123;
// const user1:ID = '123';
// Interfaces
// interface Transaction{
//   payerAccountNumber:number;
//   payeeAccountNumber:number
// }
// interface BankAccount{
//     accountNumber:number;
//     accountHolder:string;
//     balance:number;
//     isActive:boolean
//     transaction:Transaction[]
// }
// const transaction1:Transaction = {
//      payerAccountNumber:124,
//      payeeAccountNumber:556
// }
// const transaction2:Transaction = {
//      payerAccountNumber:174,
//      payeeAccountNumber:856
// }
// const transaction3:Transaction = {
//      payerAccountNumber:924,
//      payeeAccountNumber:576
// }
// const bankAccount:BankAccount = {
//   accountNumber:123456,
//   accountHolder:"Nikhil Lokare",
//   balance:7890,
//   isActive:true,
//   transaction:[transaction1,transaction2,transaction3]
// }
// Extend interface
// interface Book{
//   name:string;
//   price:number;
// }
// interface EBook extends Book{
//     // name:string,
//     // price:number,
//     filesize:number,
//     format:string,
// }
// interface AudioBook extends EBook{
//   // name:string,
//   // price:number,
//   // filesize:number,
//   // format:string,
//   duration:number,
// }
// const book:AudioBook = {
//   name:'Atmoic habbit',
//   price:1999,
//   filesize:1.5,
//   format:'pdf',
//   duration:1
// }
//Merge INterfaces
// interface Book{
//   name:string,
//   price:number,
// }
// interface Book{
//   size:number,
// }
// const book:Book={
//   name:'Nikhil',
//   price:4566,
//   size:43
// }
// type Book = {
//   name:string,
//   price:number,
// }
// type Book = {
//   size:number,
// }
// type SanitizeString = string;
// type EvenNumber = number;
//Unions
// type ID = number | string;
// function printId(id:ID){
//   if(typeof id === 'string'){
//     console.log(id.toUpperCase())
//   }
//   console.log(id);
// }
// printId('1')
// function getFirstThree(x:string|number[]){
//     return x.slice(0,3);
// }
// console.log(getFirstThree('Nikhil'))
// Generics
// function logString(arg:string){
//   console.log(arg);
//   return arg;
// }
// logString('This is nikhil lokare')
// function logNumber(arg:number){
//   console.log(arg);
//   return arg;
// }
// logNumber(86)
// function logArray(arg:any[]){
//   console.log(arg);
//   return arg;
// }
// logArray([4,5])
// function logAnyThing<T>(arg:T):T{
//    console.log(arg);
//    return arg;
// }
// logAnyThing([4,5])
// interface HasAge{
//   age:number
// }
// function getOldest<T extends HasAge>(people:T[]):T{
//     return people.sort((a,b)=> b.age - a.age)[0]
// }
// interface Player{
//     name:string,
//     age:number,
// }
// const people = [{age:30},{age:40},{age:70}]
// const player:Player[] = [
//   {name:'Nikhil',age:30},
//   {name:'Aniket',age:40},
//   {name:'Akshay',age:70}
// ]
// // getOldest(people).age;
// const person = getOldest(player);
// interface IPost{
//     title:string,
//     id:number,
//     description:string,
// }
// interface IUser{
//   title:string,
//   id:number,
//   age:number
// }
// const fetchPostData = async (path:string):Promise<IPost[]>=>{
//      const responce = await fetch(`http://example.com${path}`);
//      return responce.json();
// };
// const fetchUserData = async (path:string):Promise<IUser[]>=>{
//      const responce = await fetch(`http://example.com${path}`);
//      return responce.json();
// };
// (async()=>{
//    const posts = await fetchPostData('/posts');
//    posts[0]
// })();
// (async()=>{
//    const posts = await fetchUserData('/posts');
//    posts[0]
// })();
// Structural typing / duck typing
// interface ICredential{
//   username:string,
//   password:string,
//   isAdmin?:boolean,
// }
// function login(credentialls :ICredential):boolean{
//    console.log(credentialls);
//    return true;
// }
// const user = {
//   username:'nikhillokare',
//   password:'nikhilop',
//   iaAdmin:true,
// }
// login(user)
// interface IAuth{
//   username:string,
//   password:string,
//   login(username:string,password:string):void
// }
// const auth = {
//   username:'nikhil',
//   password:'nikhilop',
//   login(username:string,password:string){
//            return true;
//   }
// }
