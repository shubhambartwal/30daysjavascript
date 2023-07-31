function onClick(){
    p=document.getElementById("para");
    p.style.color="red";
  p.style.fontSize='100px';  
}
//
//regular
console.log("Hey");

//interpolated
console.log("I am a %s",'boy');

//styled
console.log('%c I am  some great text','font-size :50px ;background:red;  ')

//warning
console.warn('oh no');

//error
console.error('shit');

//info
console.info('crocodile is here');

//testing
console.assert(1===2,'this is wrong ')

//clearing
console.clear();

//viewing dom elements
p=document.getElementById("para");
console.log(p);
console.dir(p);

console.clear();


//grouping together
const peopleArray = [
    { name: 'John', yearOfBirth: 1990 },
    { name: 'Alice', yearOfBirth: 1985 },
    { name: 'Bob', yearOfBirth: 2005 },
  ];

  peopleArray.forEach( dog=>{
  //console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`dog name is ${dog.name} year if birth is ${dog.yearOfBirth}`);
console.groupEnd(`${dog.name}`);  
})

//count
console.count("wes")
console.count("wes")
console.count("wes")
console.count("wes")
console.count("wes")


//timing->give us idea on time