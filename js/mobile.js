
let currentTocVisibilityStatus = true;
document.getElementById("burger-menu").addEventListener("click", function () {

    if(document.getElementsByTagName("body")[0].offsetWidth > 900)
        return;

    //$(".table-of-content").fadeIn("slow");
    if(currentTocVisibilityStatus){
        $(".table-of-content").fadeIn("fast");
        currentTocVisibilityStatus = false;
    } else {
        $(".table-of-content").fadeOut("fast");
        currentTocVisibilityStatus = true;
    }

});

if(document.getElementsByTagName("body")[0].offsetWidth < 900)
    $(".table-of-content").hide();


let allTocItems = document.getElementById("toc").getElementsByTagName("li");

for(let i=0; i < allTocItems.length; i++){
    allTocItems[i].addEventListener("click", function () {
        $(".table-of-content").fadeOut("fast");
        currentTocVisibilityStatus = true;
    })
}

