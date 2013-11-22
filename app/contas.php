<?php
    //chama o arquivo de conexão com o bd
    include("conectar.php");

    $sql  = "SELECT id, nome FROM contas ORDER BY nome";

    //consulta sql
    $query = mysql_query($sql) or die(mysql_error());

    //faz um looping e cria um array com os campos da consulta
    $rows = array();
    while($r = mysql_fetch_assoc($query)) {
        $rows[] = $r;
    }

    //encoda para formato JSON
    echo json_encode($rows);
?>