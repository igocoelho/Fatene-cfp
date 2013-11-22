<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Demo</title>
</head>
<body>
    <a href="http://jquery.com/">jQuery</a>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script type="text/javascript">
 
    // Your code goes here.
 
    </script>
</body>
</html>


    window.onload = function() {
      alert( "Bem vindo!" );
    }

Unfortunately, the code doesn't run until all images are finished downloading, including banner ads. To run code as soon as the document is ready to be manipulated, jQuery has a statement known as the ready event:

	$( document ).ready(function() {
		alert('Bem vindo jQuery!'); 
	});


	$( document ).ready(function() {
		$( "a" ).click(function( event ) {
        	alert( "Obrigado pela visita!" );
		});
	});


	event.preventDefault();


	<style type="text/css">
	a.test {
    	font-weight: bold;
	}
	</style>

	$( "a" ).addClass( "test" );

	$( "a" ).removeClass( "test" );


		$( "a" ).click(function( event ) {
    		event.preventDefault();
    		$( this ).hide( "slow" );
		});



	
