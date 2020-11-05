function openForm() {
	document.getElementById("theSurvay").style.display = "block";
}

function closeForm() {
	document.getElementById("theSurvay").style.display = "none";
}

function submitSurvay() {
	alert("Form is summitted. WOW!")
}

function checkIfShowCarFields(){
	var checkBox = document.getElementById("carSwitch");
	// If the checkbox is checked, display the output text
  	if (checkBox.checked == true){
    	document.getElementById("userDrivesCar").style.display = "block";
  	} else {
    	document.getElementById("userDrivesCar").style.display = "none";
	}
}

function checkIfShowCarPoolFields(){
	var checkBox = document.getElementById("carPoolSwitch");
	// If the checkbox is checked, display the output text
  	if (checkBox.checked == true){
    	document.getElementById("userWouldCarPool").style.display = "block";
  	} else {
    	document.getElementById("userWouldCarPool").style.display = "none";
	}

}