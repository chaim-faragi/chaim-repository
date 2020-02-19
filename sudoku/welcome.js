

function check(){



    let user = document.getElementById('user').value;
    let code = document.getElementById('password').value;

    if(code.charAt(0)==1&&code.charAt(1)==2&&
    code.charAt(2)==3&&code.charAt(3)==4&&
    user.charAt(0)=='a'&&user.charAt(1)=='b'&&
    user.charAt(2)=='c'&&user.charAt(3)=='d'){
    
        window.location.assign("suduko.html");
      
    }
else{
    alert('TRY AGAIN');
}

}