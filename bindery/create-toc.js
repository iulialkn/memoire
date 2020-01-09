let toc_container = document.getElementById("table-of-content-container");
let all_toc_elements_in_wild = document.querySelectorAll("h1,h4");

for(let i=1; i < all_toc_elements_in_wild.length; i++){
    //console.log(all_toc_elements_in_wild[i])
    let element =  all_toc_elements_in_wild[i];

    let tmpElement = document.createElement("div");

    tmpElement.innerText = element.innerText;
    tmpElement.classList.add("toc-element");

    if(element.tagName === "H1"){
        tmpElement.classList.add("first-level-toc-element");
    } else if (element.tagName === "H4") {
        tmpElement.classList.add("second-level-toc-element");
    }

    toc_container.appendChild(tmpElement)

}