function computePopulationSize(lifespan, simulationLength) {
	var temp = [];
	for (var i=0; i<lifespan; i++) {
		if (i == 0) {
			temp[i] = 1;
		} else {
			temp[i] = 0;
		}
	}
		
	for (var n=0; n<simulationLength; n++) {
		var numChildren = 0;
		for (var l=lifespan-1; l>=0; l--) {
			var numAmoebas = temp[l];
			if (l > 0 && (l != lifespan-1)) {
				numChildren += numAmoebas;
			}
			if (l != lifespan-1) {
				temp[l+1] += numAmoebas;
			}
				
			temp[l] = 0;
		}
		temp[0] += numChildren;
	}
		
	var retSum = 0;
	for (var j=0; j<temp.length; j++) {
		retSum += temp[j];
	}

	console.log('----------');
	console.log(retSum);
	return retSum;
};

for (var i=0; i<10; i++) {
	computePopulationSize(4, i);
}
