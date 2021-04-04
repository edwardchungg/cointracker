var myChart;

const createChart = (time, price, coin) => {
  
  if (myChart){
    myChart.destroy();
  }

  let ctx = document.getElementById('line-chart').getContext('2d');
  console.log(ctx);
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);

  if (coin == "bitcoin"){
    lineColor = "orange";
    gradient.addColorStop(0, 'rgba(255,165,0,0.75)');   
    gradient.addColorStop(1, 'rgba(255,165,0,0.1)');
  }
  if (coin == "ethereum"){
    lineColor="rgb(178,168,236)";
    gradient.addColorStop(0, 'rgba(178,168,236,0.75)');   
    gradient.addColorStop(1, 'rgba(178,168,236,0.1)');
  }
  if (coin == "chainlink"){
    lineColor="rgb(46,93,220)";
    gradient.addColorStop(0, 'rgba(46,93,220,0.75)');   
    gradient.addColorStop(1, 'rgba(46,93,220,0.1)');
  }
  if (coin == "dogecoin"){
    lineColor="rgb(217,189,98)";
    gradient.addColorStop(0, 'rgba(217,189,98,0.75)');   
    gradient.addColorStop(1, 'rgba(217,189,98,0.1)');
  }
  if (coin == "litecoin"){
    lineColor="rgb(136,203,245)";
    gradient.addColorStop(0, 'rgba(136,203,245,0.75)');   
    gradient.addColorStop(1, 'rgba(136,203,245,0.1)');
  }


  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: time,
      datasets: [{ 
          data: price,
          label: "$",
          borderColor: lineColor,
          backgroundColor: gradient,
          fill: true,
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: .2,

        }
      ]
    },
    options: {

      scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            },
            display: false
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false,
            },
            display: false
        }],
      
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       

        },

        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    
    }
  });

}


