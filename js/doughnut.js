$(function(){

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");

    //doughnut chart data
    var data1 = {
        labels: ["2-Cars", "3-Cars", "Bus", "Cyclist", "MotorCycle", ],
        datasets: [
            {
                label: "donut-for-Collision-Type",
                data: [299, 1690, 1869, 1354, 110],
                backgroundColor: [
                    "#DEB887",
                    "#A9A9A9",
                    "#DC143C",
                    "#8080ff",
                    "#2E8B57"
                ],
                borderColor: [
                    "#CDA776",
                    "#989898",
                    "#CB252B",
                    "#8080ff",
                    "#1D7A46"
                ],
                borderWidth: [1, 1, 1, 1, 1]
            }
        ]
    };

    //doughnut chart data
    var data2 = {
        labels: ["2011","2012", "2013", "2014", "2015", "2016","2017"],
        datasets: [
            {
                label: "donut-for-year",
                data: [355, 490, 557, 727, 917, 1038, 1018],
                backgroundColor: [
                    "#FAEBD7",
                    "#DCDCDC",
                    "#E9967A",
                    "#F5DEB3",
                    "#9ACD32",
                    "#ff99cc",
                    "#b3ffff"
                ],
                borderColor: [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21",
                    "#ff99cc",
                    "#b3ffff"
                ],
                borderWidth: [1, 1, 1, 1, 1]
            }
        ]
    };

    //options
    var options_one = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Doughnut Chart: Collision-Type",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };
    var options_two = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Doughnut Chart:Year",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options_one
    });

    //create Chart class object
    var chart2 = new Chart(ctx2, {
        type: "doughnut",
        data: data2,
        options: options_two
    });
});
