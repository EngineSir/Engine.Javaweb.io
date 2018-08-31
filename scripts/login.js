function userLogin(){
			//获取参数
			$("#count_span").hide();
			$("#password_span").hide();
			var name=$("#count").val().trim();
			var password=$("#password").val().trim();
	window.location.href="index.html";
			//格式检测
			var ok=true;
			if(name==""){
				$("#count_span").show();
				ok=false;
			}
			if(password==""){
				$("#password_span").show();
				ok=false;
			}
		
			
			
			
		}
