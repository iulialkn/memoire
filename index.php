<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">


    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/sidebar.css">
    <link rel="stylesheet" href="css/note.css">
    <link rel="stylesheet" href="css/vinietes.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/glossaire.css">
    <link rel="stylesheet" href="css/mobile-mode.css">
    <link rel="stylesheet" href="css/mobile-menu.css">

    <title>L'outil libre, pour de nouvelles pratiques éditoriales</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script>
        function goToByScroll(id, myoffset) {
            //alert('loaded');
            jQuery('html,body').animate({scrollTop: jQuery("#" + id).offset().top - myoffset}, '100');
        }
    </script>
</head>
<body>



<div class="navbar">
    <a href="#ImprimerPDF" class="active" onclick="window.print()">Imprimer PDF</a>
    <a href="https://github.com/iulialkn/memoire">Git Hub</a>
    <a href="#" id="nightMode">Mode nuit</a>
    <a href="#doBook" id="doBook">Faire un livre</a>
</div>


<h1 class="titre">
    <span>L’outil libre,</span><br/><em style="padding-left: 50px">pour
        de nouvelles</em> <br/><em style="padding-left: 20px;"> pratiques éditoriales</em></h1>
<div class="cover">
    Iuliia Lukina<br/>
    DNSEP option Design Graphique et Numérique<br/>
    ESAD de Reims
</div>
<div class="direction">sous la direction de Rozenn Canevet</div>


<div id="content">

    <div class="table-of-content container-item">
        <h1 style="text-transform: uppercase; color: white">Table des matières</h1>
        <div id="toc"></div>
        <!---<div id="definition-text"></div>--->
    </div>

    <div id="text">
        <?php
        include_once "text.php";
        echo MainText::$Text;

        echo MainText::$Bibliographie;

        echo MainText::$Book;
        // echo MainText::$Glossaire;

        ?>
    </div>

    <div id="glossaire">
        <h1 style="text-transform: uppercase;padding-left: 20px;">Glossaire</h1>
        <div id="glossaire-content">
            <?php

            include_once "convert.php";

            ?>
        </div>
    </div>

</div>


<div id="mobile-glossaire">
    <div id="mobile-glossaire-content">

    </div>
</div>


<!---

--->
</body>
<script src="js/reposition.js"></script>
<script src="js/change-structure.js"></script>
<script src="js/create-gallery.js"></script>
<script src="js/mobile.js"></script>

<script src="https://unpkg.com/bindery"></script>
<script src="js/bindery.min.js"></script>

<script>

    $('#doBook').click(function(){
        doBook();

    });

function doBook(){

    Bindery.makeBook({
        content: {
            selector: '#book',
            url: "bookbindery.html",

        },
        pageSetup: {
            size: { width: '21cm', height: '27cm' },
            margin: { top: '12pt', inner: '12pt', outer: '16pt', bottom: '20pt' },
        },
    });
}
</script>

</html>

