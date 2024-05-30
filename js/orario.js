function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }
  
		function OrologioScorrevole() {
			var data = new Date();
			var day =  addZero(data.getDate()) ;
			var giorno = data.getDay();
			var month =  data.getMonth() ;
			var yy =  addZero(data.getFullYear());
			var hh = addZero(data.getHours());
			var mm =  addZero(data.getMinutes());
			var ss =  addZero(data.getSeconds());
	
			switch (giorno){
				case 1:
				giorno="lun";
				break;
				
				case 2:
				giorno="mar";
				break;
				
				case 3:
				giorno="mer";
				break;
				
				case 4:
				giorno="gio";
				break;
				
				case 5:
				giorno="ven";
				break;
				
				case 6:
				giorno="sab";
				break;
				
				case 0:
				giorno="dom";
				break;
						}
	
			switch (month){
					
				case 0:
				month="Gen";
				break;
					
				case 1:
				month="Feb";
				break;
					
				case 2:
				month="Mar";
				break;
					
				case 3:
				month="Apr";
				break;
					
				case 4:
				month="Mag";
				break;
					
				case 5:
				month="Giu";
				break;
					
				case 6:
				month="Lug";
				break;
					
				case 7:
				month="Ago";
				break;
					
				case 8:
				month="Set";
				break;
					
				case 9:
				month="Ott";
				break;
					
				case 10:
				month="Nov";
				break;
					
				case 11:
				month="Dic";
				break;	
					}
	
			var ora =  giorno + " " + day + " " + month + " " + hh + ":" + mm +"h";
	
			document.getElementById("orologio").innerText = ora;
			window.setTimeout("OrologioScorrevole()", 1000);
											}
  
