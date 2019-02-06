//making my button run
function IClickTheButton(e)
{
    var userInput = "";
    while (userInput !== "n")
    {
        userInput = prompt("Do you want to quit(n)");

    }


}

var button1Element = document.getElementById("button1");

button1Element.onclick = IClickTheButton;