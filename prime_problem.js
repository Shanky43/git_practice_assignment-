function checkprime(number){
  let count=0;
	 for(i=1;i<=number;i++) {
	   if(number%i==0){
	   count++;   
	}  
   }
if(count==2){
return true;
}else{
return false;  
}

}
 
let answer = checkprime(x=12)

if(answer==true){
console.log(x,"its a Prime Number");
 }else{
console.log(x,"its a not Prime Number");
}

