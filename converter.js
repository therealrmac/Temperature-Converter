

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var p= document.querySelector('convTemp');
var degButton= document.getElementById('tempButton');
var clearButton= document.getElementById('clear');


//CONVERTING TO CELCIUS
function toCelcius() {
  var newTemp= (((document.getElementById('temp').value -32)*5)/9);
  document.getElementById('convTemp').innerHTML= Math.round(newTemp) + " Degrees Celcius";
    if (newTemp > 32){
     document.getElementById('convTemp').style.color= 'red';
    }else if(newTemp<0){
      document.getElementById('convTemp').style.color= 'blue';
    
    }else {
      document.getElementById('convTemp').style.color= 'green';
    }

}
//CONVERTING TO FARHENHEIT
function toFarh() {
  var newTemp= (((document.getElementById('temp').value *9)/5)+32);
  document.getElementById('convTemp').innerHTML= Math.round(newTemp) + " Degrees Farhenheit";
    if (newTemp > 90){
     document.getElementById('convTemp').style.color= 'red';
    }else if(newTemp <32){
      document.getElementById('convTemp').style.color= 'blue';
    
    }else {
      document.getElementById('convTemp').style.color= 'green';
    }

}
//DETERMINING WHICH TEMPERATUE TYPE
function determineConverter (clickEvent){
var input= document.getElementById("temp").value;
  console.log(!isNaN(input));
  if (!isNaN(input)) {


  if(document.getElementById('radioCel').checked){
    toFarh();
  }else if(document.getElementById('radioFar').checked){
    toCelcius();
  }else {
    console.log('please check either Celcius or Farhenheit');
  }
}
}

//CLEAR BUTTON
function clear (){
  document.getElementById("tempForm").reset();
}
//ON KEY PRESS
function enterSubmit(x){
  if(x.keyCode == 13 || x.which== 13){
    x.preventDefault();
    determineConverter();
  }
}

document.getElementById('myField').addEventListener('keypress', enterSubmit);
button.addEventListener('click', determineConverter);
clearButton.addEventListener('click',clear);













/*button.addEventListener('click',() =>{
	if(sectempButton === true){
	var conTempC= (((temp -32)*5)/9);
	console.log(conTempC);
} else{

	var conTempF= (((temp *9)/5)+ 32);
	console.log(conTempF);
}
});

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);


/*function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
*/




