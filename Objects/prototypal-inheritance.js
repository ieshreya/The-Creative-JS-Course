
function Opponent(name, life, level) {
	this.name = name;
	this.life = life;
	this.level = level;
};

Opponent.prototype.getInfo = function() {
	console.log(this.name, this.life, this.level);
};

Opponent.prototype.attack = function() {
	console.log(`${this.name} has attacked the territory!`);
};

Opponent.prototype.block = function() {
	console.log(`${this.name} has blocked the territory!`);
};

function Dragon(life, name, level, color, spell) {
	Opponent.call(this, life, name, level);
	this.color = color;
	this.spell = spell;
}

// INHERIT PROTOTYPE using Object.create() method - 
Dragon.prototype = Object.create(Opponent.prototype);


Dragon.prototype.iceBreak = function() {
	console.log('ICE BREAKK!');
}


const newDragon = new Dragon(87, 'Trake', 12, 'blue', 'akarimato!');
console.log(newDragon);

newDragon.getInfo();