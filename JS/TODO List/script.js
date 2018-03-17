document.getElementById("Start").onclick = function(){
	var todoList = []

	/* addToList takes the item to add as the input and adds it to the end of the todoList*/
	function addToList(todo){
		todoList.push(todo)
	}


	/* Prints the list in the following format:
	************
	index0: List item 0
	index1: List item 1
	.
	.
	.
	************
	 */
	function getList(){
		console.log("************")
		todoList.forEach(function(element, i){
			console.log(i + ": " + element)
		})
		console.log("************")
	}

	function deleteFromList(index){
		/*array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
		@returs array of deleted Items*/
		var deletedItem = todoList.splice(index, 1)
		console.log("Deleted item " + index + ": " + deletedItem[0])
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
		else if (input == "delete"){
			var indexToDelete = prompt("Please type the item number you want to delete:");
			deleteFromList(indexToDelete);
		}
		else if (input == "quit"){
			break;
		}
		else{
			alert("I don't understand :( Please try again.")
		}
	}
}
