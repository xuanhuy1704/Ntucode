function dangKy(){
    var ten=document.getElementById("username").value;
    var p1=document.getElementById("pass1").value;
    var p2=document.getElementById("pass2").value;
    if(ten==""){
        alert("Vui lòng nhập tên");
        return false;
    }
   
    if((p1=="")||(p2=="")){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    if(p1!=p2){
        alert("Mật khẩu chưa giống nhau");
        return false;
    }
    else{
        alert("Đăng ký thành công");
        return true;
    }
}
