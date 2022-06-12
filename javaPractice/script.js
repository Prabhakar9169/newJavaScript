// // let arr = [3,9,[4,[5,6]]]
// // let random = arr
// // arr.push(2)
// // arr[2].push(1)
// // arr[2][1].push(8)
// // let test=[random[0],random[1], [...random[2]], random[3]]
// // test.push(2)
// // test[2].push(10)
// // console.log(random)

const arrA = [3,6,1,9]
const arrB = [88,66]

arrA.splice(2,0,...arrB)
console.log(arrA)

const arrD = [5,2,1,5,2,5]
const arrE = [3]

arrD.splice(3,0,...arrE)
console.log(arrD)

//  let myObj=[{

//     id: 1,

//     name: "Leanne Graham",

//     username: "Bret",

//     email: "Sincere@april.biz",

//     address: {

//         street: "Kulas Light",

//         suite: "Apt. 556",

//         city: "Gwenborough",

//         zipcode: "92998-3874",

//         geo: {

//             lat: "-37.3159",

//             lng: "81.1496",

//             catchPhrase: "Multi-layered client-server neural-net",

//             bs: "harness real-time e-markets"

//         }

//     },

//     phone: "1-770-736-8031 x56442",

//     website: "hildegard.org",

//     company: {

//         name: "Romaguera-Crona",

//     }
// }

//  ]


// const result = myObj.map(item => ({...item, company: { name: item.company.name}, address: {...item.address, geo:{...item.address.geo,  catchPhrase: item.company.catchPhrase, bs: item.company.bs}}}))
// console.log(result)
