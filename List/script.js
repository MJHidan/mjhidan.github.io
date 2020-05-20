var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");


function inputLength() {
    return input.value.length;
}

//Delete for first 6 buttons
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        }
}

// Change class on the list elements
function classChange(e){
    e.target.classList.toggle("done");
    ul.onclick = ul.setAttribute("class", " ");
  }
  
  ul.addEventListener('click', classChange, false);

function removeParent() {
    var target = this;
    target.removeEventListener("click", removeParent, false);
    target.parentNode.remove();
  }


function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode == 13) {
            createListElement();
        }
    }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);