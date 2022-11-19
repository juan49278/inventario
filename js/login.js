function checkedForm(){
  if(!checkpass()){
    password.classList.add('is-invalid')
  } else{
    password.classList.remove('is-invalid')
  } if(!checkuser()){
    user.classList.add("is-invalid")
  } else {
    user.classList.remove('is-invalid')
  }
  if(checkpass() && checkuser()){
    window.location.replace("index.html")
  }
}
function checkuser(){
  if(user.value === 'admin'){
    user.setCustomValidity("")
    return true
  } else{
    user.setCustomValidity("error")
    return false
  }
}
function checkpass(){
  if(password.value === "frigo2004"){
    password.setCustomValidity("")
    return true
  } else{
    password.setCustomValidity("error")
    return false
  }
}
