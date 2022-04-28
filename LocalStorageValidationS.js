
function SignIn(){
	let email,psw;
	email=document.getElementById("email").value;
	psw=document.getElementById("psw").value;

	let playerData=new Array();
	playerData=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]

	if(playerData.some((v)=>{return v.email==email && v.psw==psw})){
	alert("Your Login information Passed we will redirect you to the QuizPage");
	let playerCurrent=playerData.filter((v)=>{return v.email==email && v.psw==psw})[0]
	localStorage.setItem('name',playerCurrent.name);
	localStorage.setItem('email',playerCurrent.email);
	window.location.href='QuizPage.html'
	}else{
	  alert('Failed to Authenticate');
	}
}