function save(event){
    event.preventDefault()

alert("SAVED SUCESSFULLY")
var name=document.getElementById("name").value
var age=document.getElementById("age").value
var course=document.getElementById("course").value
var mail=document.getElementById("mail").value
var btn=document.getElementById("btn1")
var gender=document.querySelector('input[name="gender"]:checked').value

var table=document.getElementById("studentTable")
 
// // btn.addEventListener('click',function(){

// })
//
var val = table.insertRow()
val.insertCell(0).innerHTML=name
val.insertCell(1).innerHTML=age
val.insertCell(2).innerHTML=course
val.insertCell(3).innerHTML=gender
val.insertCell(4).innerHTML=mail
val.insertCell(5).innerHTML="<button onClick='del(this)'>DELETE</button>"
}
function del(btn){
    btn.parentElement.parentElement.remove()
}