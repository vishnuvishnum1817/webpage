let form = document.querySelector('#form')
let username = document.querySelector('#username')
let email = document.querySelector('#Email')
let password = document.querySelector('#password')
let cpassword = document.querySelector('#cpassword')

form.addEventListener("submit",(e)=>{
    
  if(!validinputs()){  
    e.preventDefault()
    alert('fill the form correctly')
  } else 

  {   
      //e.preventDefault() 
     alert("welcome to our site")
     remove(validinputs())
}
})

const validinputs=()=>{
    let usernameval = username.value.trim()
    let emailval = email.value.trim()
    let passwordval = password.value.trim()
    let cpasswordval = cpassword.value.trim()

    let success = true
    //user-name

    if(usernameval===''){
        success = false
        seterror(username,'username is required')
    } 
    else setsuccess(username)

    ///email

    if(emailval===''){
        success = false
        seterror(email,'email is required')
    }
    else if (!validemail(emailval)){
        success = false
        seterror(email,'correct the email')
    }
    else setsuccess(email)
   
    ///password 

    if(passwordval===''){
        success = false
        seterror(password,'password is required')
    }

    else if (passwordval.lenght<8){
        success = false
        seterror(password,'password need atleast 8 character')
    } 
    else setsuccess(password)

    ///c-password
    
    if(cpasswordval===''){
        success = false
        seterror(cpassword,'confirm password is required')
    }
    else if (cpasswordval!==passwordval){
        success = false
        seterror(cpassword,'does not match with the password')
    }
    else setsuccess(cpassword)

    return success


}

const seterror=(element,message)=>{
      let ee = element.parentElement.querySelector('.error')
      ee.innerText = message
}
const setsuccess=(element,message)=>{
    let ee = element.parentElement.querySelector('.error')
    ee.innerText = ''
}

const validemail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}