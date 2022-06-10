var button1 = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeItem(event) {
	event.target.classList.toggle("done");
}

 function listLength() {
 	console.log(li.length);
 	return li.length
 }

function createBtn() {

	 for (i = 0; i < listLength(); i++ ) {

		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteBtn");
    
        removeButton.appendChild(document.createTextNode("Delete"));
		removeButton.classList = "deleteBtn";
		li[i].appendChild(removeButton);

		removeButton.addEventListener("click", function() {
		this.parentElement.remove();
		});
	 }
 }

function createListElement () {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);


	var removeButton = document.createElement("button");
	removeButton.classList.add("deleteBtn");
    
    removeButton.appendChild(document.createTextNode("Delete"));
	removeButton.classList = "deleteBtn";
	li.appendChild(removeButton);

	removeButton.addEventListener("click", function() {
	this.parentElement.remove();
	});
 
	input.value = "";
}


button1.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeItem);