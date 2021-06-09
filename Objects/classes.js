// CLASSES

class Opponent {
	constructor(life, name, level) {
 		this.life = life;
		this.name = name;
		this.level = level;
	}
	getInfo() {
		console.log(this.life, this.name, this.level);
	}
}	

const rabbit = new Opponent(25, 'Mojo', 4);
const bug = new Opponent(5, 'fomo raby', 2);

// console.log(rabbit);

rabbit.getInfo();
bug.getInfo();

class Bug extends Opponent{
	constructor(life, name,level, legs, attack) {
		// super keyword with 'extends'
		super(life, name, level);
		this.legs = legs;
		this.attack = attack;
	}
}

const lol = new Bug(28, 'lol Bug',3, 8, 'fireball');
console.log(lol);

lol.getInfo();