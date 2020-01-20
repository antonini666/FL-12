function Fighter(person) {
  person.hpPoints = person.hp;
  person.wins = 0;
  person.loss = 0;

  return {
    getName() {
      return person.name;
    },
    getDamage() {
      return person.damage;
    },
    getStrength() {
      return person.strength;
    },
    getAgility() {
      return person.agility;
    },
    getHealth() {
      return person.hp;
    },
    heal(amountHealt) {
      amountHealt + person.hp <= person.hpPoints
        ? person.hp += amountHealt
        : person.hp = person.hpPoints;
    },
    attack(defender) {
      const MAX = 100;
      if (
        Math.round(Math.random() * MAX) <=
        MAX - defender.getStrength() - defender.getAgility()
      ) {
        defender.dealDamage(this.getDamage());
        console.log(
          `${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`
        );
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    },
    logCombatHistory() {
      return `Name: ${person.name}, Wins: ${person.wins}, loss: ${person.loss}`;
    },

    dealDamage(dmg) {
      person.hp - dmg >= 0 ? person.hp -= dmg : person.hp = 0;
    },
    addWin() {
      person.wins++;
    },
    addLoss() {
      person.loss++;
    }
  };
}

const myFighter = new Fighter({
  name: 'Rower',
  damage: 20,
  hp: 100,
  strength: 30,
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Oarsman',
  damage: 25,
  hp: 100,
  strength: 15,
  agility: 30
});

const battle = (...fighters) => {
  for (let fighter of fighters) {
    if (!fighter.getHealth() === 0) {
      console.log(`${fighter.getName()} is dead and can't fight`);
      return;
    }
  }

  let fighter = 0;

  while (fighters[fighter].getHealth()) {
    fighters[fighter].attack(fighters[1 - fighter]);
    fighter = 1 - fighter;
  }
  console.log(`${fighters[1 - fighter].getName()} has won!`);
  fighters[1 - fighter].addWin();
  fighters[fighter].addLoss();
};

battle(myFighter, myFighter2);
