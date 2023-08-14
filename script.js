// function toggleAnswer(answerId) {
//   var answer = document.getElementById(answerId);
//   //   var uparrow = document.getElementsByClassName("temp-question");
//   if (answer.style.display === "none") {
//     // uparrow.classList.add("close");
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
// }
// debugger;
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("close");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const ctx1 = document.getElementById("myChart1");

new Chart(ctx1, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Marz",
      "Apr",
      "Mai",
      "Juni",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Max Temp",
        data: [3, 4, 8, 14, 17, 21, 23, 23, 19, 14, 9, 4],
        borderColor: "#a0ddff",
        pointBackgroundColor: "#005eff",
        pointBorderColor: "#005eff",
        pointHoverBackgroundColor: "#005eff",
        pointHoverBorderColor: "#fff",
        pointRadius: 3,
        pointHoverRadius: 3,
        fill: false,
      },
    ],
    // datasets: [
    //   {
    //     label: "# of Votes",
    //     data: [12, 19, 3, 5, 2, 3],
    //     borderWidth: 1,
    //   },
    // ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          padding: 10,
          callback: function (value) {
            return value + "°C";
          },
        },
        bounds: "ticks",
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " °C";
            }
            return label;
          },
        },
      },
    },
  },
});

var ctx = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Marz",
      "Apr",
      "Mai",
      "Juni",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Rain",
        data: [3, 4, 8, 14, 17, 21, 23, 23, 19, 14, 9, 4],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  },
  // options: {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       ticks: {
  //         stepSize: 5,
  //         padding: 10,
  //         callback: function (value) {
  //           return value + " mm";
  //         },
  //       },
  //       bounds: "ticks",
  //     },
  //   },
  // },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          padding: 10,
          callback: function (value) {
            return value + " mm";
          },
        },
        bounds: "ticks",
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " mm";
            }
            return label;
          },
        },
      },
    },
  },
});

const ctx3 = document.getElementById("city_graph_placeholder");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Marz",
      "Apr",
      "Mai",
      "Juni",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Max Temp",
        data: [13, 14, 18, 14, 17, 21, 23, 23, 19, 14, 9, 14],
        borderColor: "#a0ddff",
        pointBackgroundColor: "#005eff",
        pointBorderColor: "#005eff",
        pointHoverBackgroundColor: "#005eff",
        pointHoverBorderColor: "#fff",
        pointRadius: 3,
        pointHoverRadius: 3,
        fill: false,
      },
    ],
    // datasets: [
    //   {
    //     label: "# of Votes",
    //     data: [12, 19, 3, 5, 2, 3],
    //     borderWidth: 1,
    //   },
    // ],
  },
  options: {
    scales: {
      x: { display: false },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          padding: 10,
          callback: function (value) {
            return value + "°C";
          },
        },
        bounds: "ticks",
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + " °C";
            }
            return label;
          },
        },
      },
    },
  },
});
