const endpoint='https://restcountries.com/v2/all';
const  cities=[];
fetch(endpoint).then(blob=>blob.json()).then(data=>cities.push(...data));  
 function findMatches(wordToMatch,cities){
     return cities.filter(place=>{
const regex= new RegExp(wordToMatch,'gi');  
return (place.name.match(regex) || place.name.match(regex)) 
     })
 }    
 function displayMatches(){
    const matchArray=findMatches(this.value,cities);
    const html=matchArray.map(place=>{
        return `    
        <li>
        <span class="name">${place.name},${place.capital}</span>
        </li>
        `
    })
    suggestions.innerHTML=html;
    console.log(matchArray);
 }
 const searchInput=document.querySelector('.search');
 const suggestions=document.querySelector('.suggestions');
 searchInput.addEventListener('change',displayMatches);
 searchInput.addEventListener('keyup',displayMatches)