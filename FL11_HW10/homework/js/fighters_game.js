function Fighter(props) {
  const log = {
    wins: 0,
    loses: 0,
    hp: props.hp
  }

  this.getName = () => props.name;
  this.getDamage = () => props.damage;
  this.getAgility = () => props.agility;
  this.getHealth = () => log.hp;

  this.attack = (defender) => {
    const attackSuccessRate = props.agility / defender.getAgility() > Math.random() ? 1 : 0;
    defender.dealDamage(props.damage * attackSuccessRate);
    if (attackSuccessRate === 0) {
      console.log(`${props.name} attack missed`);
    } else {
      console.log(`${props.name} make ${props.damage} to ${defender.getName()}`);
    }
  }

  this.logCombatHistory = () => {
    console.log(`Name: ${props.name} Wins: ${log.wins} Loses: ${log.loses}`);
  }

  this.heal = (points) => {
    const amount = log.hp + points;
    if (amount > props.hp) {
      log.hp = props.hp;
    } else {
      log.hp = amount;
    }
  }

  this.dealDamage = (damage) => {
    const amount = log.hp - damage;
    if (amount <= 0) {
      log.hp = 0;
    } else {
      log.hp = amount;
    }
  }

  this.addWin = () => {
    log.wins++;
  }

  this.addLoss = () => {
    log.loses++;
  }
}

function battle(attacker, defender) {
  if (attacker.getHealth() === 0) {
    console.log(`${attacker.getName()} is dead and can't fight.`);
    return;
  }
  if (defender.getHealth() === 0) {
    console.log(`${defender.getName()} is dead and can't fight.`);
    return;
  }

  while (attacker.getHealth() > 0 && defender.getHealth() > 0) {
    attacker.attack(defender);
    if (defender.getHealth() === 0) {
      defender.addLoss();
      attacker.addWin();
      console.log(`${attacker.getName()} win's the battle!`);
      break;
    }

    defender.attack(attacker);
    if (attacker.getHealth() === 0) {
      attacker.addLoss();
      defender.addWin();
      console.log(`${defender.getName()} win's the battle!`);
      break;
    }
  }
}

const myFighter = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 50
});

const myFighter2 = new Fighter({
  name: 'Jimm',
  damage: 40,
  hp: 100,
  agility: 25
});

battle(myFighter2, myFighter);
console.log(myFighter.logCombatHistory());
console.log(myFighter2.logCombatHistory());
