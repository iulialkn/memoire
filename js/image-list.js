function OuterHTML(element) {
    var container = document.createElement("div");
    container.appendChild(element.cloneNode(true));

    return container.innerHTML;
}

let newHtml = "<table>";

function CreateImageList() {
    let gallerys = document.getElementsByTagName("gallery");
    for (let i = 0; i < gallerys.length; i++) {

        let caption = gallerys[i].getElementsByTagName("figcaption")[0].innerText;
        let images = gallerys[i].getElementsByTagName("img");

        console.log(images);

        let imagesCode = `<td>`;

        for(let k=0; k < images.length; k++)
            imagesCode+=OuterHTML(images[k])+"";

        imagesCode += "</td>";

        let table = `<tr><td>${caption}</td>${imagesCode}</tr>`;

        newHtml+=table;

    }
    console.log(newHtml+"</table>")
}
CreateImageList();
