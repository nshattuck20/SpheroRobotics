/*
Using JavaScript and the documentation, write a program that 
programs the robot to draw a square. 
*/

async function startProgram() {
	resetAim()
	
	//One way to do this is to use four roll() functions
	await roll(0, 30, 2)
	delay(2)
	await roll(90, 30, 2)
	delay(2)
	await roll(180, 30, 2)
	delay(2)
	await roll(270, 30, 2)


	//But this breaks the DRY principle
	// DRY = Don't. Repeat. Yourself

	
	// A better way to do this  
	for (var i = 0; i < 4; i++) {
		await roll(getHeading() + 90, 50, 2)
		await delay(3)
	}
}