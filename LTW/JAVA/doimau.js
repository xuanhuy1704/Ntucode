function doiMau(){
    var ds=document.getElementsByClassName("box");
    // mảng (danh  sách) các thẻ có tên class là box
    // ds[chi so] (0-->n-1)
    //lấy được số phần tử của mảng  ds.length
    for(var i=0;i<ds.length;i++){
        ds[i].style.backgroundColor="yellow";
        ds[i].style.color="red";
    }
}ư