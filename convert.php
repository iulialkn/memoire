<?php
$glossaire = file_get_contents("glossaire.txt");

$lines = explode("\n", $glossaire);

foreach ($lines as $line) {
    if($line === "")
        continue;

    //echo $line;

    if(strlen($line) === 1){
        $name = trim($line, " ");
        echo "<div class='glossaire-header'>$name</div>\n";
        continue;
    }

    $definition = explode("&", $line);

    if(count($definition) === 1)
        continue;

    $definitionText = implode("", array_slice($definition, 1));
    $name = preg_replace('/\s+/', '', $definition[0]);

    $lower = strtolower($name);
    echo "<div class='def-content' glassaire-target='$lower'><span class='def-header'>$definition[0]</span>: $definitionText</div>";

}