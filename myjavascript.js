var id='a';
		function change(){
		 var image=document.getElementById("tales");
		 
		 if(id=='a')
		 {image.src="Pixlr Express/bald.jpg";
			id='b';
		 }
		 else if(id=='b')
		 {image.src="Pixlr Express/ashes.jpg";
			id='c';
		 }
		 
		 else if(id=='c')
		 {image.src="Pixlr Express/alone.jpg";
			id='d';
		 }
		 
		 else if(id=='d')
		 {image.src="Pixlr Express/absence.jpg";
			id='a';
		 }
		
		}
		var timer=setInterval("change()",4000);
		
		
		   
			function login()
		{
			 var username= document.getElementById('user').value;
			var password= document.getElementById('pass').value;
			
			
			if(username=="" && password=="")
			{alert("enter username and password.");
			 return false;
			}
			else if(username=="")
			{alert("enter username.");
			 return false;
			}
			else if(password==''){
				alert("enter password.");
				return false;
			}
			else{
			
		   	return true;
			
			}
			
		}