let allGallerys = [];

function CollectGallerys(){
    let allgallerynodes = document.getElementsByTagName("gallery");
    for(let i=0; i < allgallerynodes.length; i++){
        allgallerynodes[i].setAttribute("gallery-id", String(i));
        allGallerys.push({
            galleryElement: allgallerynodes[i],
            images: allgallerynodes[i].getElementsByTagName("img"),
            currentImage: 0,

        });
    }
    console.log(allGallerys);
}

function CreateGallery(){
    allGallerys.forEach(function (gallery) {
        for(let i=0; i < gallery.images.length; i++){
            if(i === gallery.currentImage)
                continue;
            gallery.images[i].style.display = "none";
        }

        gallery.galleryElement.addEventListener("click", function () {
            let galleryId = this.attributes.getNamedItem("gallery-id").value;

            let galleryObject = allGallerys[Number(galleryId)];
            galleryObject.currentImage++;

            for(let i=0; i < galleryObject.images.length; i++)
                galleryObject.images[i].style.display = "none";

            galleryObject.images[galleryObject.currentImage % galleryObject.images.length].style.display = "unset";

            //console.log("gallery-id", )
        });

    })
}

CollectGallerys();
CreateGallery();