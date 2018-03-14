document.getElementById("Start").onclick = function(){
	var todoList = []

	function addToList(todo){
		todoList.push(todo)
	}

	function getList(){
		console.log(todoList)
	}

	while(true){
		var input = prompt("What would you like to do?")

		if (input == "new"){
			var newItem = prompt("OK, let's add an item to the list. Please type it in:")
			addToList(newItem)
		}
		else if (input == "list"){
			getList();
			alert("Please see the console for the list")
		}
		else if (input == "quit"){
			break;
		}
		else{
			alert("I don't understand :( Please try again.")
		}
	}
}
