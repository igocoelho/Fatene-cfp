<?php
    //chama o arquivo de conexão com o bd
    include("conectar.php");

    $id = $_POST["id"];

    $sql  = "DELETE FROM movimentacoes WHERE id = " . mysql_real_escape_string($id);
    mysql_query($sql) or die(mysql_error());

    //encoda para formato JSON
    echo json_encode(array(
        'success' => true,
        'message' => "Movimentação removida com sucesso!"
    ));
?>