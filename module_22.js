var score = ""
var grade = 0

async function startProgram() {
	//speak 'I am robo teacher' 
	await speak('I am your robo teacher.', true);
}


async function onCollision() {
	// code to execute on collision
	// Tell us the students grade
	score = getRandomInt(50, 100);
	//Score is an A
	if (score >= 90) {
		grade = "A"
		setMatrixCharacter(grade, { r: 0, g: 255, b: 0 });
		await speak(buildString("Your score is ", score, ".", "Great job!"), true);
		await Sound.Game.Achievement.play(true);
	//Score is a B	
	} else if (score >= 80 && score <= 89) {
		grade = "B"
		setMatrixCharacter(grade, { r: 0, g: 0, b: 255 })
		await speak(buildString("Your score is", score, ".", "B's get degrees."), true);
	//Score is a C	
	} else if (score >= 70 && score <= 79) {
		grade = "C"
		setMatrixCharacter(grade, { r: 230, g: 230, b: 0 });
		await speak(buildString("Your score is ", score, ".", "Not bad!"), true);
	//Score is a D 	
	} else if (score >= 60 && score <= 69) {
		grade = "D"
		setMatrixCharacter(grade, { r: 200, g: 250, b: 0 });
		await speak(buildString("Your score is", score, ".", "Your work could use some revision."), true);
	//Score is an F	
	} else if (score < 60) {
		grade = "F"
		setMatrixCharacter(grade, { r: 255, g: 0, b: 0 });
		await speak(buildString("Your score is", score, ".", "You failed."), true);
		await Sound.Game.Fail.play(true);
	}


}