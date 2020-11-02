

var a ='hello world';
console.log(a);
function b() {
    console.log('called b!!');
   
}
b();
function c(){
    console.log("called c");
    b();
}
c();
var person =new Object();
person["firstname"] ="Tony";
person["lastname"] ="Alicea";
var firstNameProperty = "firstname";
document.write(person+'<br>');

document.write(person[firstNameProperty]+'<br>');
document.write(person.firstname);

person.adddress = new Object();
person.adddress.street = "111 Main str";
person.adddress.city ="New york";
person.adddress.state ="NY";
document.write('<br>'+person.adddress.street+'<br>');
document.write(person.adddress.city +'<br>');
document.write(person["address"]["state"]);