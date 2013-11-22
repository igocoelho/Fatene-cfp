<?php
    //chama o arquivo de conexão com o bd
    include("conectar.php");

    $ano = mysql_real_escape_string($_GET["ano"]);
    $mes = mysql_real_escape_string($_GET["mes"]);

    $sql  = "SELECT m.id, m.descricao, DATE_FORMAT(m.data, '%d/%m/%Y') as data, m.valor, m.tipo, m.conta_id,";
    $sql .= "       co.nome as conta, m.categoria_id, ca.nome as categoria ";
    $sql .= "  FROM movimentacoes m"; 
    $sql .= "  LEFT JOIN contas co ON co.id = m.conta_id ";
    $sql .= "  LEFT JOIN categorias ca ON ca.id = m.categoria_id";
    $sql .= " WHERE EXTRACT(YEAR FROM m.data) = " . $ano;
    $sql .= "   AND EXTRACT(MONTH FROM m.data) = " . $mes;
    $sql .= " ORDER BY m.data";

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