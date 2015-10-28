function computePopulationSize(lifespan, simulationLength) {
	var pop = [0];
	
	for (var i=0; i<simulationLength; i++) {
		var newPop = [];
		for (var j=0; j<pop.length; j++) {
			var newAge = pop[j] + 1;
			if (newAge == lifespan) {
				continue;
			} else if (newAge > 1) {
				newPop.push(0);
			}
			newPop.push(newAge);
		}
		pop = newPop;
	}

	console.log('------------');
	console.log(pop.length);
	return pop.length;
}

for (var i=0; i<10; i++) {
	computePopulationSize(4, i);
}

