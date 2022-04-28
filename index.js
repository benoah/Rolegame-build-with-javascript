import charData from "./data.js";
import Character from "./Character.js";

const attack = () => {
  if (wizard.death || orc.death) {
    endGame()
    
  }

  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  render()
}
function endGame(){
  const endMessage = wizard.health === 0 && orc.health === 0 ?
      "No victors - all creatures are dead" :
      wizard.health > 0 ? "The Wizard Wins" :
      "The Orc is Victorious"
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
  document.body.innerHTML = 
  `<div class="end-game">
      <h1>Game Over</h1>
      <h2>${endMessage}</h2>
      <h3 class="end-emoji">${endEmoji}</h3>
  </div>` 
}

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
  document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack)

const orc = new Character(charData.monster)
const wizard = new Character(charData.hero)

render()


