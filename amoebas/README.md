#Amoebas Problem

The challenge was to optimize a function that mimicked an amoeba population growth. The original code (javascript version) is in the amoebas-problem.js file.

How the function works:

* Takes two ints as parameters, lifespan and simulationLength. lifespan is the max life an amoeba can have, simulationLength is the number of years in the simulation
* Starting with a population of one amoeba that is zero years old, calculate the number of amoebas in the population after simluationLength number of years
* If an amoeba is atleast 1 years old, it will split and have a child amoeba that will be age 0
* If an amoeba reaches the lifespan limit, it will die (will not have a child)

An example run would be:
	
	e.g. (lifepan=4, simulationLength=4):
	[0] -> [1] -> [2, 0] -> [3, 1, 0] -> [2, 1, 0] => 3 amoebas
	(each number represents an amoeba that is x years old)
	
At small numbers of simulations, the runtime is ok, but as the number of simulations grow, the runtime will increase dramatically. The goal is to optimize it so that it runs at (lifespan * simulationLength) complexity. Solution can be found in amoebas-solution.js.
