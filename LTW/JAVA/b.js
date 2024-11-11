function doimau(){
    var ds=document.getElementsByClassName("box");
    // mảng ( danh sách các thẻ có tên class là box)
    //ds[chỉ số] (0-->)
    //lấy được số phẩn tử của mảng ds.length
    for(var i=0;i<ds.length;i++)(
        ds[i].style.backgroundcolor="gray"
    )
}