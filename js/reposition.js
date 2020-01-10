function CreateTOC() {
    let TOCElements = document.getElementById("text").querySelectorAll("h1,h2,h3,h4");

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

function RegisterGlossaire() {
    let allClickableWords = document.getElementsByClassName("clickable");
    for (let i = 0; i < allClickableWords.length; i++) {
        allClickableWords[i].addEventListener("click", function () {
            let targetGlossaireDefinition = document.querySelectorAll(`[glassaire-target=${this.getAttribute('definition')}]`)[0];
            jQuery('#glossaire-content').animate({scrollTop: targetGlossaireDefinition.offsetTop - 50}, '50');

            targetGlossaireDefinition.style.color = "blue";
            setTimeout(function () {
                targetGlossaireDefinition.style.color = "black";
            }, 2000);

            if (document.body.offsetWidth < 900) {
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

    noteContainer.style.color = "blue";

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

function MoveMenu() {

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

$('#toggle-box-checkbox').on('click', function () {
    $('html, body').toggleClass('nuit');
});

/*
    menu
 */

let menu = $(".table-of-content")[0];
//menu.style.border = "1px solid black";
//menu.style.height = "100%";


let status = false;

/*
    Menu mobile desktop events
 */

menu.addEventListener("mouseenter", function () {

    if (document.body.offsetWidth < 900)
        return;

    console.log("mouseenter");
    //$(this).animate({"left": `+=${menu.offsetWidth-15}`}, "fast");
    $(this).removeClass("closed");
});

menu.addEventListener("mouseleave", function () {

    if (document.body.offsetWidth < 900)
        return;

    console.log("mouseleave");
    //menu.style.left = String(15 - menu.offsetWidth)+"px";
    //$(this).animate({"left": `-=${menu.offsetWidth-15}`}, "fast");
    $(this).addClass("closed");
});

/*
    Menu mobile version events
 */

let menu_hidden = true;
let menu_old_left_offset = String(0 - 20 - menu.offsetWidth) + "px";

let mobile_menu_button_img = document.getElementById("mobile-menu-button-image");
mobile_menu_button_img.src = "/pics/menu.png";

let mobile_menu_button_container = document.getElementById("mobile-menu-button");

function move_menu_to_center() {
    //mobile_menu_button_container.style.margin = "auto";
    mobile_menu_button_container.style.bottom = "10px";
    mobile_menu_button_container.style.right = "10px";

    //mobile_menu_button_container.style.left = String(window.innerWidth - mobile_menu_button_container.clientWidth);
}

move_menu_to_center();

function open_menu() {
    menu.style.left = "0";
    menu_hidden = false;

    mobile_menu_button_img.src = "/pics/error.png";
}

function hide_menu() {
    menu.style.left = menu_old_left_offset;
    menu_hidden = true;

    mobile_menu_button_img.src = "/pics/menu.png";

}

if (document.body.offsetWidth < 900) {
    menu.style.marginLeft = "0px";

    menu.style.width = "100%";
    menu.style.height = "100%";
    menu.style.top = "0";
    menu.style.left = menu_old_left_offset;


    document.getElementById("mobile-menu-button").addEventListener("click", function () {

        console.log("operate menu");

        if (menu_hidden) {
            open_menu();
        } else {
            hide_menu();
        }
    });

    let all_menu_items = document.getElementById("toc").getElementsByTagName("li");
    for (let i = 0; i < all_menu_items.length; i++) {
        all_menu_items[i].addEventListener("click", function () {
            if (!menu_hidden) {
                hide_menu();
            }
        })
    }

}

/*
Glossaire font changer
 */

document.getElementById("glossaire").addEventListener("mouseenter", function () {
    this.getElementsByTagName("h1")[0].style.color = "white";
});

document.getElementById("glossaire").addEventListener("mouseleave", function () {
    this.getElementsByTagName("h1")[0].style.color = "black";
});



/*
about
 */
function showHide() {
    //Если элемент с id-шником element_id существует
    if (document.getElementById('block_id')) {
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById('block_id');
        //Если css-свойство display не block, то:
        if (obj.style.display != "block") {
            obj.style.display = "block"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + 'block_id' + " не найден!");

}
function showHide2() {
    //Если элемент с id-шником element_id существует
    if (document.getElementById('about')) {
        //Записываем ссылку на элемент в переменную obj
        var obj = document.getElementById('about');
        //Если css-свойство display не block, то:
        if (obj.style.display != "block") {
            obj.style.display = "block"; //Показываем элемент
        }
        else obj.style.display = "none"; //Скрываем элемент
    }
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + 'about' + " не найден!");

}