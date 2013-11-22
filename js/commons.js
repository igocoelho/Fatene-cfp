function formatarData(valor) {
	var data;
	if (valor instanceof Date) {
		data = valor;
	} else {
		data = new Date(valor);
	}
    var d = data.getDate();
    var m = data.getMonth() + 1; //O primeiro mês tem o valor 0
    var y = data.getFullYear();
    return (d <= 9 ? '0' + d : d) + "/" + (m<=9 ? '0' + m : m) + "/" + y;
}

function strToDate(str) {
	var d = str.substring(0,2);
	var m = str.substring(3,5);
	var y = str.substring(6,10);
	return new Date(y, m - 1, d); 
}

function formatarReal(n, c, d, t){
	c = isNaN(c = Math.abs(c)) ? 2 : c;
	d = d == undefined ? "," : d;
	t = t == undefined ? "." : t;

	var s = n < 0 ? "-" : "", 
	i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
	j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };