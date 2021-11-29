
// This event listener waits for a click and when click is noticed it calls handleclick function.
// No () for handleclick, if written handleclick() inside addEventListener then,
// it will be called immediately without waiting for click.
// document.querySelector("button").addEventListener("click" , handleclick);

// Another approach using NULL function i.e function without name :
// document.querySelector("button").addEventListener("click", function (){ alert("Clicked");}).

// function handleclick()
// {
//   alert("Clicked");
// }
 
// For Clicks.
for ( var i=0 ; i < document.querySelectorAll(".drum").length ; i++ )
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var key = this.innerHTML;
    handleclick(key);
    animatepress(key);
  });
}

// For Keyboard Presses.
document.addEventListener("keydown", function(event){// Call back of the event

  handleclick(event.key); // event captures the keypress and key is inner attribute of event object which
                          // captures the key that was pressed on Keyboard.
  animatepress(event.key);
});

function animatepress(key)
{
  document.querySelector("." + key).classList.add("pressed");
  var cls = document.querySelector("." + key).classList;

  // After 100ms delay function inside setTimeout executes.
  setTimeout(function(){ cls.remove("pressed"); } , 100);

}

function handleclick(key)
{
  switch (key)
  {
    case "w":
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;
    case "a":
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;
    case "s":
      var a = new Audio("sounds/tom-3.mp3");
      a.play();
      break;
    case "d":
      var a = new Audio("sounds/tom-4.mp3");
      a.play();
      break;
    case "j":
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;
    case "k":
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case "l":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;
    default: break;

  }
}

// Javascript Objects :
//
// var obj = {
//   name : "HI",
//   last : "Bye",
//   age : [10,11],
//   bell : function(){
//    alert("fn called");
// }
// };
//
// Constructor Function :
//   - Name of constructor functions starts with CAPITAL LETTERS.
//
// function Student(name, last, age){
//   this.name=name;
//   this.last=last;
//   this.age=age;
//   this.bell = function(){
//      alert("fn called");
//   }
// }
//
// Creating new object using constructor class :
//
// var ram = new Student("Ram", "harm", 10);
