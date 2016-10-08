" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";

}

function oneToTen ()
{
  var counter = 0;
  var str = "";
  while(counter <= 10)
  {
    str = str + counter + "<br />";
    counter++;
  }
  display.innerHTML = str;
}

function oddNumbers()
{
  var counter = 20;
  var str = "";
  while(counter >0)
  {
    counter--
    if(counter % 2 !== 0){
      str = str + counter + "<br />";
    }
  }
  display.innerHTML = str;
}

function squares()
{
  var counter = 1;
  var squared;
  var str = "";
  while(counter <= 10)
  {
    squared = counter * counter;
    str = str + squared +"<br />";
    counter++;
  }
  display.innerHTML = str;
}

function random4()
{
  var n = 4;
  var counter = 0;
  var rand;
  var str = "";
  while(counter <n )
  {
    rand = Math.floor(Math.random() * 100 + 1);
    str = str + rand +"<br />";
    counter++;
  }
  display.innerHTML = str;

}
function even20()
{
  var counter = 0;
  var str = "";
  while(counter < 20)
  {
    if(counter%2 == 0)
    {
      str = str + counter + "<br />";
    }
    counter++
  }
  display.innerHTML = str;
}

function powers8()
{
  var counter = 0;
  var str= "";
  while(counter < 8)
  {
    counter++;
    str = str + Math.pow(2, counter)+ "<br />";
  }
  display.innerHTML = str;
}

function areWeThereYet()
{
  var keepGoing = false;
  while(keepGoing == false)
  {
    var input = prompt("Are we there yet?");
    if (input == "yes")
    {
      keepGoing = true;
      display.innerHTML = "Good!";
    }
  }
}
function triangle()
{
  var str= "";
  for(var i = 1; i < 8; i++)
  {
    for(var j = 1; j < i;j++)
    {
      str += "*";
    }
    str = str + "<br />";
  }
    display.innerHTML = str;
}


function tableSquare()
{
  var str = "";
  for(var i = 1; i <= 4; i++)
  {
    for(var j = 1; j <= 4; j++)
    {
      str = str + "| "+ i*j;
    }
    str = str + "|"+"<br />";
  }
  display.innerHTML = str;
}

function tableSquares()
{
  var str = "";
  for(var i = 1; i <= 6; i++)
  {
    for(var j = 1; j <= 6; j++)
    {
      str = str + "| "+ i*j;
    }
    str = str + "|"+"<br />";
  }
  display.innerHTML = str;
}
