function tinhTong(){
    var a=document.getElementById("gtria").value;
    var b=document.getElementById("gtrib").value;
    //truong 1 ca a va b deu sai
    if((isNaN(a))&&(isNaN(b))){
        alert("Vui long nhap a va b ơ dạng ký số");
        document.getElementById("gtria").value="";
        document.getElementById("gtrib").value="";
    } 
    else //truong hop a sai, b dung
        if(isNaN(a)){
            alert("Vui long nhap a ơ dạng ký số");
            document.getElementById("gtria").value="";
        }
        else//truong a dung, b sai
            if(isNaN(b)){
                alert("Vui long nhap b ơ dạng ký số");
                document.getElementById("gtrib").value="";
            }
            else{//truong hơp a va b dung
                var c=parseFloat(a)+parseFloat(b);
                document.getElementById("tong").value=c;
            }
    
}   