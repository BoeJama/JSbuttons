function function1() {
    alert("You are on the homepage");
}

function function2() {
    document.getElementById("txt").innerHTML = "The KV Broadside in MW2 22 is a very, very annoying gun"
}

function function3() {
    var txt2;
    if (confirm("The KV Broadside is very annoying")) {
        txt2 = "Good opinion";
      } else {
        txt2 = "You probably think its useful for leveling up in the battlepass, which I can see";
      }

      document.getElementById("txt2").innerHTML = txt2
}

function function4() {
    alert("You are on the About Me page")
}

function function5() {
    document.getElementById("txt3").innerHTML = "Wrecking Ball is considered one of the worst tanks in Overwatch. <br> The reason why is because he possibly has the highest skill ceiling in the game. <br> This means that most Balls you play against just suck as ball.<br> If you can get good at Hammond and embrace the ball one trick,<br> you will find out that Ball can actually be one of the best tanks in the game."
}

function function6() {
    document.getElementById("txt3").style.color ="blue"
}

function function7() {
    alert("You are one the Location page")
}

function function8() {
    document.getElementById("txt4").innerHTML = "Just Cause 3 takes place in a ficticious mediterranean island nation called Medici. <br> I personally think it's one of the best settings for a game due to it's beautiful and calm nature and towns contrasted by the imposing and oppresive military bases."
}

function function9() {
    document.getElementById("h1").style.backgroundColor = "#ddd"
    document.getElementById("h1").style.color = "rgb(37, 37, 37)"
}

function function10() {
    alert("You are on the Order Goods page")
}

function function11() {
    document.getElementById("button12").style.visibility = "visible"
}

function function12() {
    let person = prompt("Please enter your name", "John Doe");
    let text;
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Sending shipment to " + person + ". Have a good day.";
    }
    document.getElementById("txt5").innerHTML = text
};
