const myArray = [
    { id: 1, text: 'First item' },
    { id: 2, text: 'Second item' },
    { id: 3, text: 'Third item' },
   ];
   const peopleArray = [
    { name: 'John', yearOfBirth: 1990 },
    { name: 'Alice', yearOfBirth: 1985 },
    { name: 'Bob', yearOfBirth: 2005 },
  ];
   //Array.some() array.every checks
   //Array.proptotype.some()//is at one person in 19
//    const isAdult=peopleArray.some(function(person){
//     const currentYear=(new Date()).getFullYear();
//     console.log(currentYear-person.yearOfBirth);
//     if(currentYear-person.yearOfBirth>=19){
//         return true;
//     }
//    }) 

//Array.every()//
 
// const isAdult=peopleArray.every(function(person){
//     if((new Date()).getFullYear()-person.yearOfBirth>=19)
//     return true;
// })


//Array.find()
// const findId= myArray.find(function(person)
// { if(person.id===2)
//     return true;
// }
// )

const findId =myArray.findIndex((person)=>{
  if(  person.id===2)
  return person;
    
})
myArray.splice(findId,0,{id:4,text:"Hunter"});
console.table(myArray)
//console.log({findId});
