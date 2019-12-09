function func(){
    setTimeout(function(){
        var x = document.querySelectorAll(".masonry-item");
        for(var a=0;a<x.length;a++){
            x[a].classList.add("animate");
            x[a].classList.remove("hide");
        }
    },100);
}