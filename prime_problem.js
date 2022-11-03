   function checkprime(num){
     let factor=0;
	 for(i=1;i<=num;i++) {
	   if(num%i==0){
	   factor++;   
	}  
   }
if(factor==2){
return true;
}else{
return false;  
}

}
 
let ans = checkprime(x=12)

if(ans==true){
console.log(x,"its a Prime Number");
 }else{
console.log(x,"its a not Prime Number");
}

