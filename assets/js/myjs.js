$(document).ready(function(){
typeWR();
});

	var occuData = [ "ASHUTOSH","DESIGNER","WEB DEVELOPER", "PROGRAMMER","Ethical Hacker"];
	i=0;
	j=0
					function typeWR(){
								data=occuData[i];
								document.getElementById('myoccupation').innerHTML=document.getElementById('myoccupation').innerHTML+data.charAt(j);
									j++;
									if(j>data.length){
										if(i==occuData.length-1){
											i=0;
											}
										else{
											i++;
											}		
											j=0;
											setTimeout(function(){document.getElementById('myoccupation').innerHTML="";typeWR(); },2000);	
											}
									else{
									setTimeout(function(){typeWR(); },100);	
									}
									
						}