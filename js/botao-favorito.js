var btn = 0;

function atribuirEvento (id) {
	document.getElementById(id).addEventListener("click", function() {
	    if(btn == 0) {
			document.getElementById(id).style.color = "#ff0505";
			btn++;
		} else { 
			document.getElementById(id).style.color = "#cec8ca";
	    	btn--;
		}	
	})
}

var x = document.getElementsByClassName("favorito");

	for (i = 0; i < x.length; i++) {
	    var ev = x[i].id;
	    atribuirEvento(ev);
	}