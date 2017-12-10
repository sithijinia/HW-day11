var btnElement = document.getElementById('btn');

btnElement.onclick= function(){
	var firstNameValue=document.getElementById('firstName').value;
	// alert(firstNameValue);

	var lastNameValue=document.getElementById('lastName').value;
	// alert(lastNameValue);

	var fullName=firstNameValue+' '+lastNameValue;
	// alert(fullNameValue);

	document.getElementById('fullName').value=fullName;


};

var resetElement =document.getElementById('resetName');
resetElement.onclick=function(){
	document.getElementById('firstName').value ='';
	document.getElementById('lastName').value ='';
	document.getElementById('fullName').value='';

};


var addElement = document.getElementById('addition');
addElement.onclick=function(){
	var firstNumber=Number(document.getElementById('firstNumber').value);
	var secondNumber=Number(document.getElementById('secondNumber').value);
	var result=firstNumber + secondNumber;
	document.getElementById('result').value=result;

};

var subElement = document.getElementById('substraction');
subElement.onclick=function(){
	var firstNumber=document.getElementById('firstNumber').value;
	var secondNumber=document.getElementById('secondNumber').value;
	var result=firstNumber-secondNumber;
	document.getElementById('result').value=result;

};

var mulElement = document.getElementById('multiplication');
mulElement.onclick=function(){
	var firstNumber=document.getElementById('firstNumber').value;
	var secondNumber=document.getElementById('secondNumber').value;
	var result=firstNumber*secondNumber;
	document.getElementById('result').value=result;

};

var divisionElement = document.getElementById('division');
divisionElement.onclick=function(){
	var firstNumber=document.getElementById('firstNumber').value;
	var secondNumber=document.getElementById('secondNumber').value;
	var result=firstNumber/secondNumber;
	document.getElementById('result').value=result;

};

var reminderElement = document.getElementById('reminder');
reminderElement.onclick=function(){
	var firstNumber=document.getElementById('firstNumber').value;
	var secondNumber=document.getElementById('secondNumber').value;
	var result=firstNumber%secondNumber;
	document.getElementById('result').value=result;

};

var resetElement =document.getElementById('reset');
resetElement.onclick=function(){
	document.getElementById('firstNumber').value ='';
	document.getElementById('secondNumber').value ='';
	document.getElementById('result').value='';

};

