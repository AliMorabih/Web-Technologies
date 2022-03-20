

function SignIn()
{
	
	let email,psw;

	email=document.getElementById("email").value;
	psw=document.getElementById("psw").value;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]

	if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
	{
	  alert("Login Pass");
	  let current_user=user_records.filter((v)=>{return v.email==email && v.psw==psw})[0]
	 localStorage.setItem('name',current_user.name);
	 localStorage.setItem('email',current_user.email);
<<<<<<< HEAD
	  window.location.href='file:///C:QuizProject/QuizPage.html'
=======
	  window.location.href="file:///C:/Users/Ali/OneDrive%20-%20Edinburgh%20Napier%20University/Desktop/PHP/QuizProject/QuizPage.html"
>>>>>>> 9ad84419dea57be858c731221e9077d41b0162e6
	}
	else
	{
	  alert('Login Fail');
	}

}