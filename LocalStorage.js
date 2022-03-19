
function DataStorage(){
	
	let name,email,psw;
	
	name=document.getElementById("name").value;
	email=document.getElementById("email").value;
	psw=document.getElementById("psw").value;
	

	let user_records=new Array();
	user_records=JSON.parse(localStorage.getItem("key"))?JSON.parse(localStorage.getItem("key")):[]
	
	if(user_records.some((v)=>{return v.email==email})){
	  alert("This Email address already exist in our Storage");
	}
		if (name==null || name=="" || psw==null || psw=="" ){  
		   alert("UserName or Password can't be blank Please try again");  
		   return false;
		}else if (email==null || email==""  ){  
		   alert(" Email address cannot be empty");  
		   return false;   
		}else if(psw.length<6 || psw.length>18){  
		   alert(" Password should be between 6 and 18 characters .");  
		   return false;  
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
	