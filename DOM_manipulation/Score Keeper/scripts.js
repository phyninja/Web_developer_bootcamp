/*updateScore is a callback function which is called when the event listener is triggered. 
Here's how it works:
Search the line "p1_button triggered" in this code. When p1_button is pressed,
it calls updateScore and passes the entire mouseEvent object as its first argument.
the mouseEvent's target property has details about where the mouseEvent came from (see event.target)
This is how we find out that we need to update p1's score or p2's score
*/
function updateScore(event){
	for (var i=0; i<score_buttons.length; i++){
		if (event.target == score_buttons[i]){ //match where the event came from with appropriate button element
				//update score
				var new_score = parseInt(current_scores[i].innerText) + 1;
				current_scores[i].innerText = new_score;

				//check if new score makes this player a winner
				var playing_to = document.getElementById('playing_to').innerText;
				if (current_scores[i].innerText == playing_to){
					disableButtons();
					current_scores[i].classList.add("winner")
				}

				//after finding the right score to update and updating it, break out of the for loop
				break;
		}
	}
}


//disables the .score_button(s)
function disableButtons(){
	for (var i=0; i<score_buttons.length; i++){
		score_buttons[i].disabled = true;
	}
}


//Reset scores when reset button is pressed
document.getElementById('reset_button').onclick = function(){

	for (var i=0; i<current_scores.length; i++){
		//set p1_score and p2_score to 0
		current_scores[i].innerText = 0;

		//remove class 'winner'
		current_scores[i].classList.remove("winner")

		//reenable buttons
		score_buttons[i].disabled = false;
		}

	}


//get things in the .current_score and .score_buttons classes as lists
var current_scores = document.getElementsByClassName('current_score')
var score_buttons = document.getElementsByClassName('score_button');

//for every .score_button, add an event listener to update the score and to check if player won
for (var i=0; i<score_buttons.length; i++){
	score_buttons[i].addEventListener('click', updateScore)
}

//Playing instead to
//As user types the new value into the input box, grab that value and change 'playing_to' 
//at the same time
function updatePlayingTo(){
	document.getElementById('playing_to').innerText = $("#playing_instead_to").val();
}
