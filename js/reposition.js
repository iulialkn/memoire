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




function RegisterGlassaire(){
    let allClickableWords = document.getElementsByClassName("clickable");
    for(let i=0; i < allClickableWords.length; i++) {
        allClickableWords[i].addEventListener("click", function () {
            let targetGlassaireDefinition = document.querySelectorAll(`[glassaire-target=${this.getAttribute('definition')}]`)[0];
            jQuery('#glossaire-content').animate({scrollTop: targetGlassaireDefinition.offsetTop-50},'50');

            targetGlassaireDefinition.style.color = "magenta";
            setTimeout(function () {
                targetGlassaireDefinition.style.color = "black";
            }, 2000);

	    /*
            document.getElementById("glossaire").scrollTo({
                top: targetGlassaireDefinition.offsetTop-50,
                left: 0,
                behavior: 'smooth'
            });
	    */

        })
    }
}
RegisterGlassaire();


function ShowNote() {
    let noteContainer = this.nextElementSibling;

    /*
    if(noteContainer.style.display === "none"){
        noteContainer.style.display = "block"
    } else {
        noteContainer.style.display = "none"
    }
     */

    noteContainer.style.color = "#FF00B2";

    setTimeout(function () {
        noteContainer.style.color = "black";
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
Glossaire font changer
 */

document.getElementById("glossaire").addEventListener("mouseenter", function () {
    this.getElementsByTagName("h1")[0].style.color = "white";
});

document.getElementById("glossaire").addEventListener("mouseleave", function () {
    this.getElementsByTagName("h1")[0].style.color = "black";
});





