import {getDiceRollArray,  getDicePlaceholderHtml} from "./utils.js"




function  Character(data) {
    //    this.elementId = data.elementId
    //   this.name = data.name
    //  this.avatar = data.avatar
    //  this.health = data.health
    // this.diceCount = data.diceCount
        Object.assign(this, data)
    
     
        this.getDiceHtml = function(diceCount) {
          return getDiceRollArray(diceCount).map(function(num){ 
              return  `<div class="dice">${num}</div>`
          }).join('')
      }
    
      
        this.getCharacterHtml = ()=> {
          const {elementId,avatar,name,health, diceCount} = this
          const diceHtml = this.getDiceHtml(diceCount)
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
            <div class="dice-container">${diceHtml} </div>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>`
          
        }
    }

    export default Character;