let pass=document.getElementById("Password");
let UpperCase="ABCDEFGHIJKMNOPQRSTUVWXYZ";
let LowerCase="abcdefghijklmnopqrstuvwxyz";
let specialchar="@#$%^&^&*()_{}|?/=+-";
let numbers="0123456789";
let size=12;
let all=UpperCase+LowerCase+specialchar+numbers;
function  generate(){
    let Password="";
   Password+=UpperCase[Math.floor(Math.random()*UpperCase.length)];
   Password+=LowerCase[Math.floor(Math.random()*LowerCase.length)];
   Password+=specialchar[Math.floor(Math.random()*specialchar.length)];
   Password+=numbers[Math.floor(Math.random()*numbers.length)];
   for (let i = Password.length; i < size; i++) {
    Password += all[Math.floor(Math.random() * all.length)];
}
pass.innerHTML=Password;
}