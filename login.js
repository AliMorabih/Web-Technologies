var attempt = 7; // This Variable will be using to count number of each attempts from the user password entry.
// Below function Executes on click of login button.
function validate(){
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if (username==null || username=="" || password==null || password==""){  
		   alert("UserName or Password can't be blank Please try again");  
		   return false;  
		}else if(password.length<6 || password.length>18){  
		   alert(" Password should be between 6 and 18 characters .");  
		   return false;  
		}  
		if (username == "Woldcup2022" && password == "Woldcup2022"){
		alert ("Login successfully You will be Starting The Quiz Shortly");
		// After the player enter a valid username and password we will redirect him to the Quiz page
		window.location = "file:///C:/Users/Ali/OneDrive%20-%20Edinburgh%20Napier%20University/Desktop/PHP/QuizProject/QuizPage.html"; 
		   return false;
		}else{
		attempt --;// Decrementing by one for each wrong password entered.
		alert(" Wrong userName or password, You have "+attempt+" attempt left;");
		// we lock the account after 7 attempts.
		if(attempt == 0){
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		    return false;
		}
		}
		}