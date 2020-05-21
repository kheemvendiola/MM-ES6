class Monster {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }

    attack() {
        console.log(`${this.Name} attacked`);
    }
}


class Pokemon extends Monster {
    constructor(id, name, type) {
        super(id, name);
        this.Type = type;
    }

    attack(attackname) {
        super.attack();
        console.log(`${this.Name} used ${attackname}`);
    }
}

const myPokemon = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']);
myPokemon.attack("Growl");


const myPokemon2 = new Pokemon(1, 'Squirtle', ['Grass', 'Poison']);
myPokemon2.attack("Tackle");


const pokemons = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']),
    new Pokemon(1, 'Bulbasaur', ['Poison', 'Grass']),
    new Pokemon(2, 'Ivysaur', ['Grass']),
    new Pokemon(2, 'Ivysaur', ['Poison']),
    new Pokemon(4, 'Charmander', ['Fire']),
    new Pokemon(7, 'Squirtle', ['Water']),
];



/* case 1.1  */ console.log(pluck(pokemons, 'Name'));
/* case 1.2  */ console.log(pluck(pokemons, 'Name', true));
/* case 2.1  */ console.log(pluck('pokemons', 'Name'));
/* case 2.2  */ console.log(pluck(pokemons, 'name'));
/* case 2.3  */ console.log(pluck(pokemons, 'name', false, true));


function pluck(arrayObject, propertyToLookUp, isUniqueValuesOnly = false, isThrowIfPropertyNotFound = false) {
    var arr = [];

    if ((arrayObject != undefined) && Array.isArray(arrayObject)) {
        if (arrayObject[0].hasOwnProperty(propertyToLookUp)) {
            arrayObject.forEach(element => {
                arr.push(element[propertyToLookUp]);
            });
        } else {
            if (isThrowIfPropertyNotFound) {
                return `ERROR: Objects in array do not contain the expected '${propertyToLookUp}' property.`;
            }
        }
    }
    else {
        return 'ERROR: Invalid argument for expected array parameter.';
    }

    if (isUniqueValuesOnly) {
        arr = arr.filter((x, i, a) => a.indexOf(x) == i);
    }

    return arr;
}
