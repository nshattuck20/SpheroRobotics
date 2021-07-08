//Bonus Challenge 

async function startProgram() {
	await roll(85, 120, 2);
	await delay(2);
	await rawMotor(50,50,2);
	await delay(2);
	await Sound.play(true)
	await delay(5);
	setMainLed({ r: 87, g: 255, b: 44 });
	await roll(90, 50, 2);
	await delay(2);
	await spin(120, 1);
}

async function onCollision() {
	await speak('Ouch! Why did you hit me?', true);
	await roll(90, 136, 0);
	setMainLed({ r: 255, g: 22, b: 80 });
	exitProgram();
}
registerEvent(EventType.onCollision, onCollision);


// Module 21 activity 
async function startProgram() {
	await speak('Hi my name is Robbie the Robot and I like to spin and roll', true);
	setMainLed({ r: 0, g: 255, b: 0 });
	await spin(360, 2);
	await roll(0, 50, 2);
	await delay(1);
	await spin(360, 2);
	await roll(180, 50, 2);
}

async function onCollision() {
	await speak('ouch that hurt!', true);
	setMainLed({ r: 255, g: 0, b: 0 });
	await delay(2);
	exitProgram();
}
registerEvent(EventType.onCollision, onCollision);