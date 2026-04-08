
document.getElementById("contactForm")?.addEventListener("submit",function(e){
e.preventDefault();
fetch("http://localhost:5000/saveData",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:document.getElementById("name").value,
email:document.getElementById("email").value
})
})
})
