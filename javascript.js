var splash = document.getElementById("splash");
var playerButtons = document.querySelectorAll(".playerButton");
var splashReturn = document.getElementById("splashReturn");
var main = document.getElementById("main");

for (i = 0; i < playerButtons.length; i++) {
  playerButtons[i].addEventListener("click", function(e) {
    addPlayerSquares(this.value);
    splash.style.display = "none";
    main.style.display = "flex";
    console.log(e);
  });
}

//Creates no of divs based on player button selection
function addPlayerSquares(num) {
  for (i = 1; i <= num; i++) {
    //Create content of each player div
//     var name = document.createElement('input');
//     name.style.zIndex = "15";
//     name.style.position = "absolute";
//     name.style.display = "flex";
    var minus = document.createElement('button');
    minus.innerHTML = "-";
    minus.style.width = "50%";
    minus.style.height = "100%";
    minus.style.border = "none";
    minus.style.outline = "none";
    minus.id = "minus";
    var score = document.createElement('h1');
    score.innerHTML = "20";
    score.id = "score";
    score.style.display = "flex";
    score.style.alignItems = "center";
    score.style.zIndex = "5";
    score.style.position = "relative";
    var plus = document.createElement('button');
    plus.innerHTML = "+";
    plus.id = "plus";
    plus.style.width = "50%";
    plus.style.height = "100%";
    plus.style.border = "none";
    plus.style.outline = "none";
    (function(score) {
    minus.addEventListener("click", function(){
      score.innerHTML = parseInt(score.innerHTML) - 1;
    }, false);
    plus.addEventListener("click", function(){
      score.innerHTML = parseInt(score.innerHTML) + 1;
    }, false);
    })(score);
    //Create each players div and append to #main
    var div = document.createElement('div');
    //div.appendChild(name);
    div.className = "playerSquare";
    div.appendChild(minus);
    div.appendChild(score);
    div.appendChild(plus);
    main.appendChild(div);
  };
}

splashReturn.addEventListener("click", function() {
  splash.style.display = "grid";
  main.style.display = "none";
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
})

