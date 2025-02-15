function validate()
{
    var username= document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    // to print in console
    // console.log(username + email)

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkppassword(password, cpassword)
}

function checkusername(username)
{
    if(username.length>7)
    {
        // if the user name is valid at first time
        document.getElementById('username').classList.add('success')
        // second scenario 
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML=''
    }
    else{
        // first show the error field
        document.getElementById('username').classList.add('error') 
        document.getElementById('username_error').innerText='username must be 8 letters long'
    }
}

function checkemail(email)
{
    if(email.length>8 && email.includes('@gmail'))
    {
        // if the user name is valid at first time
        document.getElementById('email').classList.add('success')
        // second scenario 
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML=''
    }
    else{
        // first show the error field
        document.getElementById('email').classList.add('error') 
        document.getElementById('email_error').innerText='enter valid email'
    }
}

function checkpassword(password)
{
    if(password.length>7)
    {
        // if the user name is valid at first time
        document.getElementById('password').classList.add('success')
        // second scenario 
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerHTML=''
    }
    else{
        // first show the error field
        document.getElementById('password').classList.add('error') 
        document.getElementById('password_error').innerText='password must be 8 letter long'
    }
}

function checkppassword(password, cpassword)
{
    if(password==cpassword && password!='')
    {
        // if the user name is valid at first time
        document.getElementById('cpassword').classList.add('success')
        // second scenario 
        document.getElementById('cpassword').classList.replace('error', 'success')
        document.getElementById('cpassword_error').innerHTML=''
    } 
    else{
         // first show the error field
         document.getElementById('cpassword').classList.add('error') 
         document.getElementById('cpassword_error').innerText='password not match'
    
    }
}