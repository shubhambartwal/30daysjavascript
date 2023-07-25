const hugeArray = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut",
    "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris",
    "nisi", "ut", "al"];
    const inventors = [
        {
          name: "Thomas",
          lastname: "Edison",
          age: 84,
          yearOfBirth: 1847,
        },
        {
          name: "Nikola",
          lastname: "Tesla",
          age: 86,
          yearOfBirth: 1856,
        },
        {
          name: "Marie",
          lastname: "Curie",
          age: 66,
          yearOfBirth: 1867,
        },
        {
          name: "Albert",
          lastname: "Einstein",
          age: 76,
          yearOfBirth: 1879,
        },
        {
          name: "Ada",
          lastname: "Lovelace",
          age: 36,
          yearOfBirth: 1815,
        },
        {
          name: "Alexander",
          lastname: "Graham Bell",
          age: 75,
          yearOfBirth: 1847,
        },
      ];
      

      //array.filter(()=>{})//callback has an condition->if its true we can keep it
      const fiftees= inventors.filter((inventor)=>(inventor.yearOfBirth>=1850 &&inventor.yearOfBirth<1860));
      console.table(fiftees);

      //array.map()->use to transform data in array without modifying the origional array.
//const fullName=inventors.map((inventor)=>inventor.name+" "+inventor.lastname);
const fullName=inventors.map((inventor)=>`${inventor.name}${inventor.lastname}`);

//sort->it returns 1 and -1
// const ordered=inventors.sort((a,b)=>{
// if(a.yearOfBirth>b.yearOfBirth){
//     return 1;
// }
// else return -1;
// });

//reducer->takes 2 parameter(a,iterator)=>{},initialvalue of a);

// const totalAge=inventors.reduce((total_age,inventor)=>{
//   return  total_age+inventor.age;
// },0);

// const oldest=inventors.sort((a,b)=>a.age>b.age?-1:1);
// console.table(oldest);
// console.log(`totalAge= ${totalAge}`);
// const ordered=inventors.sort((a,b)=>a.yearOfBirth>b.yearOfBirth?1:-1);
//  console.table(ordered);
// console.log(fullName);

//sort excercise
//reduce excercise
const repetitiveArray = [
    "apple", "banana", "cherry", "date", "elderberry", 
    "fig", "grape", "honeydew", "kiwi", "lemon", 
    "mango", "orange", "papaya", "quince", "raspberry", 
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", 
    "apple", "banana", "cherry", "date", "elderberry", 
    "fig", "grape", "honeydew", "kiwi", "lemon"
  ];
  const fruits= repetitiveArray.reduce(function(fruit,item){
if(!fruit[item])
{
    fruit[item]=0;
}
    fruit[item]++;
    return fruit;
  },{});
  console.log(fruits)