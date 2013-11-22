<?php
	$servidor = "localhost"; 
	$user = "root";
	$senha = "root";
	$db = "spa1";
 
	//executa a conexão com o banco, caso contrário mostra o erro ocorrido
	$conexao = mysql_connect($servidor,$user,$senha) or die (mysql_error());
 
	//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
	$banco = mysql_select_db($db, $conexao) or die(mysql_error());
?>