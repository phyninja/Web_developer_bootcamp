/*updateScore is a callback function which is called when the event listener is triggered. 
Here's how it works:
Search the line "p1_button triggered" in this code. When p1_button is pressed,
it calls updateScore and passes the entire mouseEvent object as its first argument.
the mouseEvent's target property has details about where the mouseEvent came from (see event.target)
This is how we find out that we need to update p1's score or p2's score
*/
function updateScore(event){

	if (event.target == p1_button){
		//update score1
		var new_score1 = parseInt(p1_score.innerText) + 1;
		p1_score.innerText = new_score1;
	}
	else if (event.target == p2_button){
		//update score2
		var new_score2 = parseInt(p2_score.innerText) + 1;
		p2_score.innerText = new_score2;
	}
	else console.log("updateScore called from unknown object")
}


//TODO write checkScores
function checkScores(){
	
}


//Updating Player 1 score
var p1_score = document.getElementById('p1_score')
var p1_button = document.getElementById('p1_button');
p1_button.addEventListener('click', updateScore) /*p1_button triggered*/
p1_button.addEventListener('click', checkScores) /*p1_button triggered*/



//Updating Player 2 score
var p2_score = document.getElementById('p2_score')
var p2_button = document.getElementById('p2_button');
p2_button.addEventListener('click', updateScore)
p2_button.addEventListener('click', checkScores)
