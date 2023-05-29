// const total = {
//     checkValue: (a) => a,
//     checkSum:(a,b) => a+b,
//     checkNull:()=>null,
//     getObj:()=>{
//         const user = {firstName:'Prashant'}
//         user['lastName'] = 'Jha'
//         return user
//     },
//     revStr: (str)=>str.split('').reverse().join(''),
// }

// module.exports = total;
const a = 9
function foo() {
    var a = 2;
    console.log('=====', this)
    bar();
    }
    function bar() {
    console.log( a );
    }
    foo();
