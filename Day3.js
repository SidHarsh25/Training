var numberArr =  [1,2,3,4,5] ;
var decimalAr = [1.1, 1.2, 1.3]
var stringArr =["abe", "xyz", "par"];


var mixArr =["pankaj", 25000, function one(){
    return "hello";
}];

// console.log(mixArr[2]()


// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }
// console.log(calculateVolume(4)(5)(6)));

let users = [

    { firstName: "Susan", lastName: "Steward" },

    { firstName: "Daniel", lastName: "Longbottom" },

    { firstName: "Jacob", lastName: "Black" },

  ];
  let newUser = users.map(fullName);

  function fullName(name) {
    return [name.firstName,name.lastName].join(" ");
  }
  console.log(newUser);

  let newUser2 = users.map((i)=>{
    return [i.firstName,i.lastName].join(" ");
  })
  console.log(newUser2);


  let num1 = [22,58,78,11,10,58];

  
  let newUserM = num1.map((i)=>{
     if(i > 18){
        return i;
     }
  })
  let newUserF = num1.filter((i)=>{
    return i > 18;
  })
  console.log(newUserM, " ", newUserF);

  let cities = [

    { name: "Delhi", population: 3792621 },

    { name: "Mumbai", population: 8175133 },

    { name: "Kolkata", population: 2695598 },

    { name: "Hyderabad", population: 2099451 },

    { name: "Bangalore", population: 1526006 },

  ];

  var newArray = cities.filter(function (data) {
    return data.population > 3000000
          
  }).sort().reverse();;

  console.log(newArray);
