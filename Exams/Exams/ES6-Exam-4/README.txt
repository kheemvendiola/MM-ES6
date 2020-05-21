
This exercise would focus on OOP concepts and higher order functions.

======================
|OOP concept exercise|
======================

1) Create a class named Monster that takes 2 param as constructor (id, name)
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




================================
|higher order function exercise|
================================

Create your own "pluck" function that accepts 4 parameters (2 required and 2 optional parameters):

**required parameters**
- arrayObject  - an array object
- propertyToLookUp - a string representing the property name 


**optional parameters**
- isUniqueValuesOnly - determines if the pluck function should only return unique values if there are duplicates
- isThrowIfPropertyNotFound - determines if the pluck function returns an error if the property you are trying to pluck is not existing
	- if true, return an error message -> "Objects in array do not contain the expected '${property}' property."
	- else  return an empty array

use this function to pluck properties from the array of Pokemon type objects that you created earliear. 
The return type of the said pluck function should be an array containing the values of the said property for each Pokemon object.




see detailed sample output below for the requirements:
	const pokemons = [
	    new Pokemon([ 1, 'Bulbasaur', [ 'Grass', 'Poison' ]]),
	    new Pokemon([ 1, 'Bulbasaur', [ 'Poison', 'Grass' ]]),
		new Pokemon([ 2, 'Ivysaur', [ 'Grass' ]]),
		new Pokemon([ 2, 'Ivysaur', [ 'Poison' ]]),
		new Pokemon([ 4, 'Charmander', [ 'Fire' ]]),
		new Pokemon([ 7, 'Squirtle',  [ 'Water' ]]),

	];


	pluck(pokemons, 'Name'];



	output:
	[
	  'Bulbasaur',
	  'Bulbasaur',
	  'Ivysaur',
	  'Ivysaur',
	  'Charmander',
	  'Squirtle'
	]

Case 1.1) call pluck() with valid arguments

	pluck(pokemons, 'Name')

	output:

	[
	  'Bulbasaur',
	  'Bulbasaur',
	  'Ivysaur',
	  'Ivysaur',
	  'Charmander',
	  'Squirtle'
	]


Case 1.2) call pluck() with valid arguments and configure to return unique values only

	pluck(pokemons, 'Name', true)

	output:

	[ 'Bulbasaur', 'Ivysaur', 'Charmander', 'Squirtle' ]


Case 2.1) call pluck() with invalid argument, i.e., non-array argument vs. array parameter

	pluck('pokemon', 'Name')


	output:
	"ERROR: Invalid argument for expected array parameter."


Case 2.2) call pluck() with invalid arguments, i.e., non-existent property but configured to not throw error on such
	pluck(pokemons, 'name')
	
	output:
	[]


Case 2.3) call pluck() with invalid arguments, i.e., configure to throw error on non-existent property

	pluck(pokemons, 'name', false, true)

	output:
	"ERROR: Objects in array do not contain the expected 'name' property."
