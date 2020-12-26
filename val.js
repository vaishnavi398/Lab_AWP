
function validateForm(){
	var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
	var phonenum = document.forms["myForm"]["phonenum"].value;
    var message = document.forms["myForm"]["message"].value;
    var colorname = document.forms["myForm"]["colorname"].value;
    var cname = document.forms["myForm"]["cname"].value;

	if (name.length<1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    if(phonenum.length<1) {
        document.getElementById('error-phonenum').innerHTML = " Please Enter Your Valid Phone *";      
    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    }    
    if (message.length<1) {
        document.getElementById('error-colorname').innerHTML = " Please Enter Your color name *";
    }      
    if (message.length<1) {
        document.getElementById('error-cname').innerHTML = " Please Select Your car name *";
    }   
    if(name.length<1 || email.length<1 || phonenum.length<1 || message.length<1 || colorname.length<1 || cname.length<1){
       	return false;
    }            
}
