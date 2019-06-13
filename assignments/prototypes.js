// GameObject
function GameObject(attrs) {
    this.createdAt = attrs.createdAt
    this.name = attrs.name
    this.dimensions = attrs.dimensions
}

GameObject.prototype.destroy = function () {
    return `${this.name} was removed from the game.`
}

// CharacterStats
function CharacterStats(CharStatsAttrs) {
    GameObject.call(this, CharStatsAttrs);
    this.healthPoints = CharStatsAttrs.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype)

CharacterStats.prototype.takeDamage = function () {
    return `${this.name} took damage.`
}

// Humanoid
function Humanoid(HumanoidAttrs) {
    CharacterStats.call(this, HumanoidAttrs);
    this.team = HumanoidAttrs.team;
    this.weapons = HumanoidAttrs.weapons;
    this.language = HumanoidAttrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype)


Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`
}

// Hero
function Hero(HeroAttrs) {
    Humanoid.call(this, HeroAttrs);
    this.enemy = HeroAttrs.enemy
}

Hero.prototype = Object.create(Humanoid.prototype)


Hero.prototype.attack = function () {
    return `Hero: ${this.name} attacks ${this.enemy}. Now ${this.enemy} now has ${this.healthPoints-10}`
}

Hero.prototype.super = function () {
    return `Hero: Prepare to be vanquished villain!! ${this.name} launches his sword and now ${this.enemy} has ${this.healthPoints-35} health`
}

// Villain
function Villain(VillainAttrs) {
    Humanoid.call(this, VillainAttrs);
    this.enemy = VillainAttrs.enemy
}

Villain.prototype = Object.create(Humanoid.prototype)


Villain.prototype.laugh = function () {
    return `Villain: MWA HA HA!!.`
}

Villain.prototype.attackH = function () {
    return `Villain: ${this.name} attacks ${this.enemy}. Now ${this.enemy} now has ${this.healthPoints-10}`
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
});
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
});
const hero = new Hero({
    createdAt: 'Beginning of time',
    dimensions: {
        length: 3,
        width: 1,
        height: 4,
    },
    healthPoints: 35,
    name: 'Isaiah',
    team: 'Justice',
    weapons: [
      'Sword of Light',
      'Shield of Power',
    ],
    language: 'English',
    enemy: 'Alfred',
});
const villain = new Villain({
    createdAt: 'Within the same time darkness was created',
    dimensions: {
        length: 8,
        width: 1,
        height: 2,
    },
    healthPoints: 30,
    name: 'Alfred',
    team: 'Evil',
    weapons: [
      'Evil Orb',
    ],
    language: 'Ancient Dialect',
    enemy: 'Isaiah',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(hero.attack());
console.log(villain.attackH());
console.log(villain.laugh());
console.log(hero.super());
villain.destroy();
