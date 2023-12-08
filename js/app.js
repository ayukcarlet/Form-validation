function validateform(){
    var name = document.myform.name.value;
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.indexOf(".");
    var zipcode =document.myform.zipcode.value;
    var age = document.myform.age.value;
    var license =document.myform.license.value;
    if(name ==""|| name==null){
        alert(" Name cannot be empty");
        return false;
    }else if(atposition<1||dotposition<atposition+2||dotposition+2>=x.length){
        alert("please enter a valid email address\n atposition:"+atposition+"\n dotposition:"+dotposition);
      return false;  

    }else if(zipcode.length<5 || zipcode.length>5){
        alert("Zip code must be a 5 digit number.");
        return false;

    }else if( age==""|| age<18 || age>35){
        alert(" age is required and must be between 18 and 35 years");
        return false;
    } else if(license==""){
        alert("indicate if license is available or not");
        return false;

    }
}
