class Fighter {
  constructor({ name, damage, hp, strength, agility }) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.strength = strength;
    this.agility = agility;
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
  attack() {
    return this.name;
  }
  logCombatHistory() {
    return this.name;
  }
  heal() {
    return this.name;
  }
  dealDamage() {
    return this.name;
  }
  addWin() {
    return this.name;
  }
  addLoss() {
    return this.name;
  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 25
});
