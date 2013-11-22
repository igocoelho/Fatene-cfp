<?php
    //chama o arquivo de conexão com o bd
    include("conectar.php");

    $id = $_POST["id"];
    $nome = $_POST["nome"];

    $sqlInsert  = "INSERT INTO categorias(nome) VALUES('" . mysql_real_escape_string($nome) . "')";
    $sqlUpdate  = "UPDATE categorias SET nome = '" . mysql_real_escape_string($nome) . "' WHERE id = " . mysql_real_escape_string($id);

    if ($id) {
        mysql_query($sqlUpdate) or die(mysql_error());
    } else {
        mysql_query($sqlInsert) or die(mysql_error());
    }

    //encoda para formato JSON
    echo json_encode(array(
        'success' => true,
        'message' => "Categoria salva com sucesso!"
    ));
?>