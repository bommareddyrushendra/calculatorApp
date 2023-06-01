//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function increases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Square Root" button is clicked. 
//Note that it also changes the values of the global variables. 
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.sqrt(num);
        }
}

//The following function is called when "Power 2" button is clicked. 
//Note that it also changes the values of the global variables. 
function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = num ** 2;
        }
}

//The following function is called when "Floor" button is clicked. 
//Note that it also changes the values of the global variables. 
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.floor(num);
        }
}

//The following function is called when "Round" button is clicked. 
//Note that it also changes the values of the global variables. 
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            document.frmCalc.txtNumber.value = Math.round(num);
        }
}


//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked. 
//Note that it also changes the values of the global variables. 
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}

//The following function is called when "Multiplication" button is clicked. 
//Note that it also changes the values of the global variables. 
function multiplication() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiplication";
        }
}

//The following function is called when "Divison" button is clicked. 
//Note that it also changes the values of the global variables. 
function division() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Division";
        }
}

//The following function is called when "Power" button is clicked. 
//Note that it also changes the values of the global variables. 
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Power";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Multiplication"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Division"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            else if (calc == "Power"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }
        
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}