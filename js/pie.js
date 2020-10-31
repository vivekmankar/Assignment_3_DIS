$(document).ready(function () {

	var ctx1 = $("#pie-chartcanvas-1");
	var ctx2 = $("#pie-chartcanvas-2");

	var data1 = {
		labels : ["Fatal", "No-Injury","Incapacitating","Unknown"],
		datasets : [
			{
				label : "pie-for-Injury-Type",
				data : [40,30,20,10],
				backgroundColor : [
                    "#ff0000",
                    "#008000",
					"#ffff00",
					"#a52a2a"
                    
                ],
                borderColor : [
                    "#CDA776",
                    "#008000",
                    "#CB252B",
                    "#E39371",
                    "#1D7A46"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var data2 = {
		labels : ["0-4", "4-8","8-12","12-16","16-20","20-24"],
		datasets : [
			{
				label : "Crashes by Hour",
				data : [10, 10,20,30,30],
				backgroundColor : [
                    
                    "#ffff00",
					"#ff0000",
					"#008000",
					"#0000ff",
					"#ffcc66"
					
                  
                ],
                borderColor : [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21"
                ],
                borderWidth : [1, 1, 1, 1, 1]
			}
		]
	};

	var options_one = {
		title : {
			display : true,
			position : "top",
			text : "Count of Injury Type",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		}
	};

var options_two = {
        title : {
            display : true,
            position : "top",
            text : "Crash count by Hour",
            fontSize : 18,
            fontColor : "#111"
        },
        legend : {
            display : true,
            position : "bottom"
        }
    };


	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : options_one
	});

	var chart2 = new Chart( ctx2, {
		type : "pie",
		data : data2,
		options : options_two
	});

});
