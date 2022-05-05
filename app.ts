// // const show = (a: number, b: number): number | string => {
// //     return {}
// // }
//
// // const user = {name: 'Max', age: 15}
// // const showUser = (user: { name: string, age: number }) => {
// //     user.
// // }
//
// // type UniqId = number
// //
// // interface IUser<T> {
// //     id?: UniqId,
// //     name: string,
// //     age: number,
// //     // address:IAdress
// //     arr: T[]
// // }
//
// // interface IAdress{
// //     street:string,
// //     house:number
//
// // }
// // const user: Partial<IUser> = {age: 34, name: 'Max', id:5,address:{street:'street',house:41}}
// // const user: IUser<number> = {name: 'ads', age: 15, arr: [21, 412]}
// // console.log(user);
// //
// // type StateType = [string, (a: number, b: number) => number]
// //
// // const useState: StateType =['text', (a, b) => {
// //     return a + b
// // }]
// //
// // let [first, second] = useState;
// // console.log(first);
// // console.log(second(3, 4));
//
// // class User {
// //
// //     constructor(private id?: number, private name: string, private age: number) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// //
// //     getId(): number {
// //         return this.id
// //     }
// //
// //     setId(newId: number): void {
// //         this.id = newId
// //     }
// // }
// //
// // const user: User = {name: 'Max', age: 5}
// //
// //
// //
// //
//
// interface ISHApeActions {
//     area: () => number;
//     perimeter: () => number;
// }
//
// class Triangle implements ISHApeActions {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
//
// class Reactangle implements ISHApeActions {
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a+ this.b;
//     }
//
// }
//
// const shapes:ISHApeActions[]=[new Triangle(1,2,3), new Reactangle(2,4),new Triangle(2,4,5)]
//
// for (let shape of shapes){
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
//
//
//
//
