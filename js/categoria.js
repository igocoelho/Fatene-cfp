$("#novaCategoria").click(function(event) {
	$('#dlgCategoria').dialog({title: 'Nova Categoria'});
	$('#frmCategoria').form('clear');
	$('#dlgCategoria').dialog('open');
	$('#categoriaNome').focus();
	event.preventDefault();
});

$("#editarCategoria").click(function(event) {
	var data = $('#dgCategorias').datagrid('getSelected');
	if (data) {
		$('#dlgCategoria').dialog({title: 'Editar Categoria'});
		$('#frmCategoria').form('clear');

		$('#categoriaId').val(data.id);
		$('#categoriaNome').val(data.nome);

		$('#dlgCategoria').dialog('open');
		$('#categoriaNome').focus();
	} else {
		$.messager.alert('Atenção', 'Selecione uma Categoria.', 'warning');
	} 
	event.preventDefault();
});

$("#salvarCategoria").click(function(event) {
	var dados = $('#frmCategoria').serialize();
	$.post('app/categoriaSalvar.php', dados, function(data) {
		$('#dlgCategoria').dialog('close');
		$('#frmCategoria').form('clear');
		$.messager.alert('Informação', 'Categoria salva com sucesso!', 'info');
		$('#dgCategorias').datagrid('reload');
	}).error(function(){
		$.messager.alert('Atenção', 'Erro ao salvar Categoria!', 'error');
		$('#categoriaNome').focus();
	});
	event.preventDefault();
});

$("#removerCategoria").click(function(event) {
	var dados = $('#dgCategorias').datagrid('getSelected');
	if (dados) {
		$.messager.confirm('Confirmação', 'Deseja realmente remover a Categoria selecionada?', function(result) {
			if (result) {
				$.post('app/categoriaRemover.php', {id: dados.id}, function(data) {
					$.messager.alert('Informação', 'Categoria removida com sucesso!', 'info');
					$('#dgCategorias').datagrid('reload');
				}).error(function(){
					$.messager.alert('Atenção', 'Erro ao remover Categoria!', 'error');
				});
			}
		});
	} else {
		$.messager.alert('Atenção', 'Selecione uma Categoria.', 'warning');
	}
	event.preventDefault();
});