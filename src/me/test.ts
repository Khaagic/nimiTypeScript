//the literal TYPE
   // one way
// let pagination: 10| 30 | 70;
// function setPagination(value: 10| 30| 70){
//     return value;
// }
// let log = console.log;
// log(setPagination(10));

    // second way

type pagination = 10 | 20 | 30;
function setPagination(value:pagination){
    return value;

}
console.log("this the literal type does:",setPagination(30));

