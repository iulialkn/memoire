window.addEventListener("scroll", function () {

    if(document.getElementsByTagName("body")[0].offsetWidth < 900)
        return;

    $(".table-of-content").show();

    let glossaire = document.getElementById("glossaire");
    let toc = document.getElementsByClassName("table-of-content")[0];

    if (window.scrollY > 800) {
        glossaire.style.position = "fixed";
        glossaire.style.top = "3px";

        toc.style.position = "fixed";
        toc.style.top = "3px";
        toc.style.height = window.innerHeight;
    } else {
        glossaire.style.position = "absolute";
        glossaire.style.top = "800px";

        toc.style.position = "absolute";
        toc.style.top = "800px";
    }
});