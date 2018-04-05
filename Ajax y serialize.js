$(document).ready(function()){
//Asiendo peticiones de datos por medio de ajax sin cargar la pagina
//metodo ajax para obtener campos en una sola variable!!!!!!!!!!!!!!!!(serialize)	


	var url= 'ajax.php',
	color= $('#img');
	
	$('#boton').click(function()){
		
	/*		var coche= $('#coche').val(),
	modelo= $('#modelo').val(),
	color= $('#color').val();
*/
  //usando serialize obtendria el valor de todos los inputs con name establecido
	var data $('form').serialize();
		
		$.ajax({
			url: url,
			type: 'POST',
			//de este modo pasaria todos los valores de inputs establecidos
			data: data,
			dataType:'html',
			contentType:'application/x-www-form-urlencoded:;charset=UTF-8',
			beforeSend: function(){
				
				$img.css({display:'none'});
			},
			complete: function(){
				
				$img.css({display:'none'});
			},
			succes: function(datos){
				
				$('.informacion').html(datos);
			},
			error: function(ajax,estado,excepcion){				
				$img.css({display:'none'})
			},
			
		})
		
	}
	
	
}