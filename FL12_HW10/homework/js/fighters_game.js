class Fighter {
  constructor({ name, damage, hp, strength, agility }) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.health = hp;
    this.strength = strength;
    this.agility = agility;
    this.wins = 0;
    this.losses = 0;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getStrength() {
    return this.strength;
  }
  getAgility() {
    return this.agility;
  }
  getHealth() {
    return this.hp;
  }
  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this.wins}`);
  }
  heal(healthPoints) {
    this.hp = Math.min(this.hp, this.health + healthPoints);
  }
  dealDamage(damage) {
    this.health = Math.max(0, this.health - damage);
  }
  addWin() {
    return this.wins++;
  }
  addLoss() {
    return this.losses++;
  }
  attack(def) {
    const MAX = 100;
    if (
      Math.floor(Math.random() * MAX) <=
      MAX - def.getAgility() - def.getStrength()
    ) {
      def.dealDamage(this.getDamage());
      console.log(
        `${this.getName()} makes ${this.getDamage()} damage to ${def.getName()}`
      );
    } else {
      console.log(`${this.getName()} attac missed`);
    }
  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 15
});

const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 90,
  strength: 25,
  agility: 20
});

console.log(myFighter.attack(myFighter2));
