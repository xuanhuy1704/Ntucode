function canhbao(){
 
    var kt=confirm("Cho mình cái infor nhé:");
    if(kt==true){
        var ten=prompt("Tên bạn là gì:","");
        var tuoi=prompt("Bạn bao nhiêu tuôi:","");
        if(confirm("Bạn có người yêu chưa")==true)
            alert(ten +"di choi voi minh nhe");
    }
    else
       alert("Vậy thì bye bye");
}