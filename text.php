<?php

class MainText {
    public static $Text = "";
    public static $Bibliographie = "";
    public static $Glossaire = "";
    public static $Cover = "";
    public static $Book = "";

}

MainText::$Text = file_get_contents("main_text.html");
MainText::$Bibliographie = file_get_contents("bibl.html");
MainText::$Glossaire = file_get_contents("glossaire.html");
MainText::$Cover = file_get_contents("cover.html");
MainText::$Book = file_get_contents("bookbindery.html");