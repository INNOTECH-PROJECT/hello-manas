function validate()
{
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
if(user=="admin"&& pass =="user")
{
    location.href='table.html';
}
else
    alert("login failed");
I
}