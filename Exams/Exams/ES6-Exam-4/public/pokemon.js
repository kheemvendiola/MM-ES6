/* 1) Create a class named Monster that takes 2 param as constructor (id, name)
2) Create a new method on Monster class named "attack", this method returns a message '[monster_name] attacked'
3) Create a new class named Pokemon that inherits from Monster class
4) Add new property to Pokemon class. Property name is "type" which is an array
5) override Monster class' attack method, add an "attackname" parameter and the return message should be '[pokemon name] used [attackname]'
6) use the said Pokemon class to create an array of Pokemons

Sample: 
const myPokemon = new Pokemon(1, 'Bulbasaur', [ 'Grass', 'Poison' ]);
myPokemon.attack("Growl");

sample output:
"Bulbasaur used Growl"

 */

class Monster {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }

    attack() {
        console.log(this.name + ' attacked');

    }

}


class Pokemon extends Monster {
    constructor(id, name, type) {
        super(id, name);
        this.type = type;
    }

    attack(attackname) {
        super.attack();
        console.log(this.name + ' used ' + attackname);
    }
}

const myPokemon = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']);
myPokemon.attack("Growl");


const myPokemon2 = new Pokemon(1, 'Squirtle', ['Grass', 'Poison']);
myPokemon2.attack("Tackle");

