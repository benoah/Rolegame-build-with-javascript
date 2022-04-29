import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount)

    this.setDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }


    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`  
    }
    
        this.getCharacterHtml = ()=> {
          const { elementId, name, avatar, health, diceCount, diceHtml } = this
          const healthBar = this.getHealthBarHtml()
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
            <p class="health"> ${healthBar}</p>
            <div class="content">
         
            <div class="dice-container"> ${diceHtml}</div>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>`
          
        }
    }

    export default Character;

