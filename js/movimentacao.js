$("#novaMovimentacao").click(function(event) {
	$('#dlgMovimentacao').dialog({title: 'Nova Movimentação'});
	$('#frmMovimentacao').form('clear');

	$('#movimentacaoConta').combobox({
		url: 'app/contas.php',
		valueField: 'id',
		textField: 'nome'
	});
	$('#movimentacaoCategoria').combobox({
		url: 'app/categorias.php',
		valueField: 'id',
		textField: 'nome'
	});

	$('#dlgMovimentacao').dialog('open');
	$('#movimentacaoTipo').focus();
	event.preventDefault();
});

$("#editarMovimentacao").click(function(event) {
	var data = $('#dgMovimentacoes').datagrid('getSelected');
	if (data) {
		$('#dlgMovimentacao').dialog({title: 'Editar Movimentação'});
		$('#frmMovimentacao').form('clear');

		$('#movimentacaoConta').combobox({
			url: 'app/contas.php',
			valueField: 'id',
			textField: 'nome'
		});
		$('#movimentacaoCategoria').combobox({
			url: 'app/categorias.php',
			valueField: 'id',
			textField: 'nome'
		});

		$('#movimentacaoId').val(data.id);
		$('#movimentacaoDescricao').val(data.descricao);
		$('#movimentacaoData').datebox('setValue', formatarData(strToDate(data.data)));
		$('#movimentacaoValor').numberbox('setValue', data.valor);
		$('#movimentacaoTipo').combobox('setValue', data.tipo);
		$('#movimentacaoConta').combobox('setValue', data.conta_id);
		$('#movimentacaoCategoria').combobox('setValue', data.categoria_id);

		$('#dlgMovimentacao').dialog('open');
		$('#movimentacaoTipo').focus();
	} else {
		$.messager.alert('Atenção', 'Selecione uma Movimentação.', 'warning');
	} 
	event.preventDefault();
});

$("#salvarMovimentacao").click(function(event) {
	var dados = {};

	if ($('#movimentacaoId').val() > 0) {
		dados.id = $('#movimentacaoId').val();
	}
	dados.descricao = $('#movimentacaoDescricao').val();
	dados.data = $('#movimentacaoData').datebox('getValue');
	dados.valor = $('#movimentacaoValor').numberbox('getValue');
	dados.tipo = $('#movimentacaoTipo').combobox('getValue');
	dados.conta_id = $('#movimentacaoConta').combobox('getValue');
	dados.categoria_id = $('#movimentacaoCategoria').combobox('getValue');

	$.post('app/movimentacaoSalvar.php', dados, function(data) {
		$('#dlgMovimentacao').dialog('close');
		$('#frmMovimentacao').form('clear');
		$.messager.alert('Informação', 'Movimentação salva com sucesso!', 'info');
		$('#dgMovimentacoes').datagrid('reload');
	}).error(function(){
		$.messager.alert('Atenção', 'Erro ao salvar Movimentação!', 'error');
		$('#movimentacaoTipo').focus();
	});
	event.preventDefault();
});

$("#removerMovimentacao").click(function(event) {
	var dados = $('#dgMovimentacoes').datagrid('getSelected');
	if (dados) {
		$.messager.confirm('Confirmação', 'Deseja realmente remover a Movimentação selecionada?', function(result) {
			if (result) {
				$.post('app/movimentacaoRemover.php', {id: dados.id}, function(data) {
					$.messager.alert('Informação', 'Movimentação removida com sucesso!', 'info');
					$('#dgMovimentacoes').datagrid('reload');
				}).error(function(){
					$.messager.alert('Atenção', 'Erro ao remover Movimentação!', 'error');
				});
			}
		});
	} else {
		$.messager.alert('Atenção', 'Selecione uma Movimentação.', 'warning');
	}
	event.preventDefault();
});