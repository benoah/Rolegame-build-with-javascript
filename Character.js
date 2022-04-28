import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'


const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth


    /*   
CHALLENGE
1. Set up a new method called getHealthBarHtml
2. Create a const called "percent" and set it equals to the 
returned value from our getPercentage function (think what 
arguments you want to pass in).
3. For now, just log out the value of the new const "percent". 
4. Down in the getCharacterHtml method, set up a const
called healthBar and set it equal to the returned value
of the getHealthBarHtml method.
*/



function Character(data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.maxHealth = this.health
    
    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }
    
    this.takeDamage = function(attackScoreArray){  
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0){
            this.dead = true  
            this.health = 0
        }
        console.log(getPercentage(this.health, this.maxHealth)) 
    }

        
        this.getCharacterHtml = ()=> {
          const {avatar,name,health, diceArray} = this
         return`
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
            <div class="dice-container">${diceArray}</div>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>`
          
        }
    }

    export default Character;

