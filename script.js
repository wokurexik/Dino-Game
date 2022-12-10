  var character = document.getElementById("character");
  var block = document.getElementById("block");
  var counter = 0;
  var x = document.getElementById("block");
  function jump() {
    if (character.classList == "animate") {
      return;
    }
    character.classList.add("animate");
    setTimeout(function () {
      character.classList.remove("animate");
    }, 300);
  }
  var checkDead = setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    let blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
    if (blockLeft < 60 && blockLeft > -60 && characterTop >= 86) {
      block.style.animation = "none";
      alert("Game Over. score: " + Math.floor(counter / 100));
      counter = 0;
      block.style.animation = "block 1s infinite linear";
    } else if (x.style.display === "block")  {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
  }, 10);

  
  
function startGame() {
  var x = document.getElementById("block");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
