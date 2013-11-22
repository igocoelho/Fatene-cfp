var mes, ano;
var valorMes = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

$(document).ready(function() {
	var hoje = new Date();
	ano = hoje.getFullYear();
	mes = hoje.getMonth() + 1;

	$('#mesAnoAtual').html(valorMes[mes] + ' de ' + ano);

	$('#dgMovimentacoes').datagrid({
		url: 'app/movimentacoes.php?mes=' + mes + '&ano=' + ano,
		method: 'GET',
		singleSelect: true,
		pagination: false,
		striped: true,
		fit: true,
		fitColumns: true,
		columns:[[	
			{field:'id', hidden:true},
			{field:'conta_id', hidden:true},
			{field:'categoria_id', hidden:true},
			{field:'descricao', title:'Descrição', width:100},
			{field:'conta', title:'Conta', width:100},
			{field:'categoria', title:'Categoria', width:100},
			{field:'data', title:'Data', width:100},
			{field:'valor', title:'Valor', width:100, align:'right',
				styler: function(value, row, index) {
					if (row.tipo == 'D'){
						return 'color:red;';
					} else {
						return 'color:green;';
					}
				},
				formatter: function(value, row, index) {
					return formatarReal(value);
				}
			}
		]]
	});

	$('#dgCategorias').datagrid({
		url: 'app/categorias.php',
		method: 'GET',
		singleSelect: true,
		pagination: false,
		striped: true,
		fit: true,
		fitColumns: true,
		columns:[[	
			{field:'id', hidden:true},
			{field:'nome', title:'Nome', width:100}
		]]
	});

	$('#dlgCategoria').dialog({
		modal: true,
		width: 300,
		height: 135
	});

	$('#dlgMovimentacao').dialog({
		modal: true,
		width: 300,
		height: 335
	});
});

$.fn.datebox.defaults.formatter = function(date){
	return formatarData(date);
}

$.fn.numberbox.defaults.formatter = function(value){
	return formatarReal(value);
}

$("#incremetarData").click(function(event) {
	mes += 1;
	if (mes == 13) {
		mes = 1;
		ano += 1;
	}
	reloadGridMovimentacoes();
	event.preventDefault();
});

$("#decremetarData").click(function(event) {
	mes -= 1;
	if (mes == 0) {
		mes = 12;
		ano -= 1;
	}
	reloadGridMovimentacoes();
	event.preventDefault();
});

var reloadGridMovimentacoes = function() {
	$('#mesAnoAtual').html(valorMes[mes] + ' de ' + ano);
	$('#dgMovimentacoes').datagrid({url: 'app/movimentacoes.php?mes=' + mes + '&ano=' + ano});
	$('#dgMovimentacoes').datagrid('load');	
}