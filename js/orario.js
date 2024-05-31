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
				month="gen";
				break;
					
				case 1:
				month="feb";
				break;
					
				case 2:
				month="mar";
				break;
					
				case 3:
				month="apr";
				break;
					
				case 4:
				month="mag";
				break;
					
				case 5:
				month="giu";
				break;
					
				case 6:
				month="lug";
				break;
					
				case 7:
				month="ago";
				break;
					
				case 8:
				month="set";
				break;
					
				case 9:
				month="ott";
				break;
					
				case 10:
				month="nov";
				break;
					
				case 11:
				month="dic";
				break;	
					}
	
			var ora =  giorno + " " + day + " " + month + " " + hh + ":" + mm +"h";
	
			document.getElementById("orologio").innerText = ora;
			window.setTimeout("OrologioScorrevole()", 1000);
											}
  
