var numberOfGuitar = document.querySelectorAll(".guitar").length;


for (var i = 0; i<numberOfGuitar; i++) {

  document.querySelectorAll(".guitar")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;


        switch (buttonInnerHTML) {
          case "q":
            var funky = new Audio("sounds/funky.mp3")
            funky.play();
            break;

          case "w":
            var guitar = new Audio("sounds/guitar-jingle.mp3")
            guitar.play();
            break;

          case "e":
            var riff1 = new Audio("sounds/guitar-riff1.mp3")
            riff1.play();
            break;

          case "r":
            var riff2 = new Audio("sounds/guitar-riff2.mp3")
            riff2.play();
            break;

          case "t":
            var jingle = new Audio("sounds/jingle-clean.mp3")
            jingle.play();
            break;

          case "y":
            var winmutedguitar = new Audio("sounds/winmutedguitar.mp3")
            winmutedguitar.play();
            break;



          default: console.log(buttonInnerHTML);

        }

  });

}
