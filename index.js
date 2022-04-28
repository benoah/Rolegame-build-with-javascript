const hero = {
    elementId: "hero", 
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

function getDiceRollArray(diceCount){
    return  new Array(diceCount).fill(0).map(()=>{
        return Math.floor(Math.random() * 6) + 1
    })

}

/* Challenge: 
1. Replace the for loop in getDiceRollArray with a new Array() and fill it 
with 0s as its initial state. The new array should be diceRoll length.

2. Use .map() directly on the array rather than declaring any new variables 
and return a random number from 1-6 in each element of the array.
3. Make sure you delete anything from that function that we no longer need.
*/       



function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map((num)=>{
        return  `<div class="dice">${num}</div>`
    }).join(" ")
}




function renderCharacter(data) {
    const {elementId,avatar,name,health, diceCount} = data
    const diceHtml = getDiceHtml(diceCount)
    
    
    document.getElementById(elementId).innerHTML = `
    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${avatar}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4"> ${name}</p>
          <p class="health">health: <b> ${health} </b></p>
        </div>
      </div>
  
      <div class="content">
      <div class="dice-container">${diceHtml} </div>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>`
}

renderCharacter(hero);
renderCharacter(monster);

/*
Challenge
1. Create a new array with a length of 1000 and save it to a 
   const called poisonMushrooms
2. Convert each element of the array to a mushroom emoji 🍄
3. Log out the new array 
*/

const poisonMushrooms = new Array(1000).fill("🍄")
console.log(poisonMushrooms);