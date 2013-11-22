<?php
    //chama o arquivo de conexão com o bd
    include("conectar.php");

    $id = $_POST["id"];
    $descricao = $_POST["descricao"];
    $data = $_POST["data"];
    $valor = $_POST["valor"];
    $tipo = $_POST["tipo"];
    $conta_id = $_POST["conta_id"];
    $categoria_id = $_POST["categoria_id"];

    if($id) {
        $sql  = "UPDATE movimentacoes SET descricao = '$descricao', data = STR_TO_DATE('$data', '%d/%m/%Y'), valor = $valor, ";
        $sql .= "tipo = '$tipo', conta_id = $conta_id, categoria_id = $categoria_id WHERE id = $id";
    } else {
        $sql  = "INSERT INTO movimentacoes(descricao, data, valor, tipo, conta_id, categoria_id) ";
        $sql .= "VALUES('$descricao', STR_TO_DATE('$data', '%d/%m/%Y'), $valor, '$tipo', $conta_id, $categoria_id)";
    }

    mysql_query($sql) or die(mysql_error());

    //encoda para formato JSON
    echo json_encode(array(
        'success' => true,
        'message' => "Movimentação salva com sucesso!"
    ));
?>