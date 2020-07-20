var data;
function plot() {
    data = [
        {
            name: "happy",
            value: +document.getElementById("inpH").value
        },
        {
            name: "veryhappy",
            value: +document.getElementById("inpVH").value
        },
        {
            name: "sad",
            value: +document.getElementById("inpS").value
        },
        {
            name: "verysad",
            value: +document.getElementById("inpVS").value
        },
        {
            name: "neutral",
            value: +document.getElementById("inpN").value
        }
    ];

    var sum = 0;
    for (i = 0; i < data.length; i++) {
        sum = data[i].value + sum;
    }

    if (sum == 100) {
        document.getElementById("veryhappyspan").innerText = document.getElementById("inpVH").value;
        document.getElementById("happyspan").innerText = document.getElementById("inpH").value;
        document.getElementById("neutralspan").innerText = document.getElementById("inpN").value;
        document.getElementById("sadspan").innerText = document.getElementById("inpS").value;
        document.getElementById("verysadspan").innerText = document.getElementById("inpVS").value;

        data.sort(function (a, b) {
            return a.value - b.value;
        });

        console.log(data);

        for (j = data.length - 1; j >= 0; j--) {
            var imgName = data[j].name;
            var diff = -1;
            var imgPath = "images/";
            
            switch(imgName) {
                case "veryhappy": data[j].imgType = 'VH'; break;
                case "happy": data[j].imgType = 'H'; break;
                case "neutral": data[j].imgType = 'N'; break;
                case "sad": data[j].imgType = 'S'; break;
                case "verysad": data[j].imgType = 'VS'; break;
            }

            if(j === data.length - 1) {
                data[j].imgNum = 5;
            }
            
            if(j > 0) {
                if(data[j].value === data[j - 1].value) {
                    if(data[j].imgNum) {
                        data[j - 1].imgNum = data[j].imgNum;
                    }
                } else {
                    data[j - 1].imgNum = data[j].imgNum - 1;
                }
            }
        
            var image = document.getElementById(imgName);
            image.className = "bg"+"-"+data[j].imgType+"_"+data[j].imgNum;                    
        }
    } else {
        alert("sum of all value should be 100")
    }
}