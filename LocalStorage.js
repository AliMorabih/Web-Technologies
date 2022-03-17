
function DataStorage(){
	
	let name,email,psw;
	
	name=document.getElementById("name").value;
	email=document.getElementById("email").value;
	psw=document.getElementById("psw").value;

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]
	
	if(user_records.some((v)=>{return v.email==email})){
	  alert("This Email adress already exist in our Storage");
	}
	else{
	  user_records.push({
	  "name":name,
	  "email":email,
	  "psw":psw
	})
	localStorage.setItem("key",JSON.stringify(user_records));
	}

	}
        