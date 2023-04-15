function DataStorage(){
	let name,email,psw;
	name=document.getElementById("name").value;
	email=document.getElementById("email").value;
	psw=document.getElementById("psw").value;
	let playerData=new Array();
	playerData=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]
	if(playerData.some((v)=>{
		return v.email==email})){
	  alert("This Email address already exist in our Database");
	}
		if (name==null || name=="" || psw==null || psw=="" ){  
		   alert(" Name or password cannot be empty Please retry ");  
		   return false;
		}else if (email==null || email==""  ){  
		   alert(" The email address must not be empty ");  
		   return false;   
		}else if(psw.length<6 || psw.length>18){  
		   alert(" Password should be between 6 and 18 characters Please Try again.");  
		   return false;  
		}
	else{
	  playerData.push({
	  "name":name,
	  "email":email,
	  "psw":psw
	})
	localStorage.setItem("key",JSON.stringify(playerData));
	}
	}
	