//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MortalKombatant(name, punch, catchPhrase, specialMove) {
  this.name = name;
  this.punch = punch;
  this.catchPhrase = catchPhrase;
  this.specialMove = specialMove;
  this.win = function () {
    console.log(`${this.name} wins!`);
  };
  this.fatality = function () {
    console.log(`${this.specialMove}: FATALITY!`);
  };
  this.taunt = function () {
    console.log(`${this.catchPhrase}`);
  };
}

const scorpion = new MortalKombatant(
  "Scorpion",
  "punch",
  "Get over here!",
  "Hellfire"
);
