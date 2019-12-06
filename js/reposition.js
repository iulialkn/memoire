function CreateTOC() {
    let TOCElements = document.getElementById("text").querySelectorAll("h1,h2,h3,h4");
    //console.log(TOCElements);

    let TOCContainer = document.getElementById("toc");
    TOCContainer.innerHTML = "<ul>";
    for (let i = 0; i < TOCElements.length; i++) {

        tocElementContent = TOCElements[i].innerHTML;
        tocElementType = TOCElements[i].nodeName;
        // création de l'ancre de référence dans le texte
        TOCElements[i].innerHTML = `<a id="header${String(i)}" name="header${String(i)}">${tocElementContent}</a>`;
        // création de la liste du sommaire
        TOCContainer.innerHTML += `<li class="type-${tocElementType}"><a href="javascript:goToByScroll('header${String(i)}','10');">${tocElementContent}</a></li>`;
    }
    TOCContainer.innerHTML += "</ul>";
}
CreateTOC();

function MoveFootNotes() {
    let bodyElement = document.getElementsByTagName("body")[0];
    let noteLink = document.getElementsByClassName("link");

    for (let i = 0; i < noteLink.length; i++) {
        let noteId = noteLink[i].innerHTML.replace("[", "").replace("]", "");
        let noteDefinition = document.getElementById(`note${noteId}`).innerText;

        let newDefinitionBox = document.createElement("div");
        newDefinitionBox.classList.add("note-box");

        newDefinitionBox.innerText = noteDefinition;

        newDefinitionBox.style.position = "absolute";
        newDefinitionBox.style.top = noteLink[i].offsetTop + "px";
        newDefinitionBox.style.left = "100px";
        bodyElement.appendChild(newDefinitionBox);
    }
}


let mobileGlossaireShowContainer = document.getElementById("mobile-glossaire");
mobileGlossaireShowContainer.addEventListener("click", function () {
    this.style.display = "none";
});

function RegisterGlossaire(){
    let allClickableWords = document.getElementsByClassName("clickable");
    for(let i=0; i < allClickableWords.length; i++) {
        allClickableWords[i].addEventListener("click", function () {
            let targetGlossaireDefinition = document.querySelectorAll(`[glassaire-target=${this.getAttribute('definition')}]`)[0];
            jQuery('#glossaire-content').animate({scrollTop: targetGlossaireDefinition.offsetTop-50},'50');

            targetGlossaireDefinition.style.color = "magenta";
            setTimeout(function () {
                targetGlossaireDefinition.style.color = "black";
            }, 2000);

            if(document.body.offsetWidth < 900) {
                let defContainer = document.getElementById("mobile-glossaire-content");
                defContainer.innerHTML = targetGlossaireDefinition.innerHTML;
                mobileGlossaireShowContainer.style.display = "block";
            }
        })
    }
}
RegisterGlossaire();


function ShowNote() {
    let noteContainer = this.nextElementSibling;

    /*
    if(noteContainer.style.display === "none"){
        noteContainer.style.display = "block"
    } else {
        noteContainer.style.display = "none"
    }
     */

    noteContainer.style.color = "#ffffff";

    setTimeout(function () {
        noteContainer.style.color = "white";
    }, 2000)

}

function MakeClickable() {
    let clickableLinks = document.getElementsByClassName("link");

    for (let i = 0; i < clickableLinks.length; i++) {
        clickableLinks[i].addEventListener("click", ShowNote);
        //clickableLinks[i].nextElementSibling.style.display = "none";
    }
}

MakeClickable();

let lastPosition = "bottom";
function MoveMenu(){

    let currentOffset = window.pageYOffset;
    //console.log(currentOffset)

    // TBD

    lastPosition = currentOffset;
}

window.addEventListener("scroll", MoveMenu);

/*
document.getElementById("printImagesButton").addEventListener("click", function () {
    let targetFrameWithImages = document.getElementsByTagName("iframe")[0];
    targetFrameWithImages.contentWindow.print();
});
*/

$('#nightMode').on('click', function(){
    $('html, body').toggleClass('nuit');
});

/*
    menu
 */

let menu = $(".table-of-content")[0];
menu.style.borderRight = "5px solid black";
menu.style.left = String(15 - menu.offsetWidth)+"px";
menu.style.height = "100%";


let status = false;

/*
    Menu mobile desktop events
 */

menu.addEventListener("mouseenter", function () {

    if(document.body.offsetWidth < 900)
        return;

    console.log("mouse over");

    $(this).animate({"left": `+=${menu.offsetWidth-15}`}, "fast");
});

menu.addEventListener("mouseleave", function () {

    if(document.body.offsetWidth < 900)
        return;

    console.log("mouse out");
    //menu.style.left = String(15 - menu.offsetWidth)+"px";

    $(this).animate({"left": `-=${menu.offsetWidth-15}`}, "fast");
});

window.addEventListener("resize", function () {
    menu.style.left = String(15 - menu.offsetWidth)+"px";
});

/*
    Menu mobile version events
 */

let menu_hidden = true;
menu.addEventListener("click", function () {

    if(document.body.offsetWidth > 900)
        return;

    console.log("mouse click");
    //menu.style.left = "0px";

    if(menu_hidden){
        $(this).animate({"left": `+=${menu.offsetWidth-15}`}, "fast");
        menu_hidden = false;
    }
    else{
        $(this).animate({"left": `-=${menu.offsetWidth-15}`}, "fast");
        menu_hidden = true;
    }

    status = true;
});


/*
Glossaire font changer
 */

document.getElementById("glossaire").addEventListener("mouseenter", function () {
    this.getElementsByTagName("h1")[0].style.color = "white";
});

document.getElementById("glossaire").addEventListener("mouseleave", function () {
    this.getElementsByTagName("h1")[0].style.color = "black";
});




