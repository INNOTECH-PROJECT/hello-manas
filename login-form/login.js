function validate()
{
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
if(user=="admin"&& pass =="user")
{
    alert("login succesfully");
    return false;
}
else
    alert("login failed");
I
}
