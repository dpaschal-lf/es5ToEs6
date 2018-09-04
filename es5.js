



var animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);


function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	for(var animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		var thisAnimal = animalArray[animalIndex];
		var name = thisAnimal.name;
		var height = thisAnimal.height;
		var weight = thisAnimal.weight;
		var type = thisAnimal.type;
		var foods = thisAnimal.top3Foods;
		var food1 = foods[0];
		var food2 = foods[1];
		var food3 = foods[2];
		var sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+weight+" kilograms";
		console.log(sentence);
		if(listFoods){
			var foodSentence = "   it likes to eat "+food1+", "+food2+", and "+food3;
		}
	}
}