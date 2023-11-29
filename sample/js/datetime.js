var temp1 = 0
setInterval(() => {
    var hour = document.getElementById("hour")
    hour.textContent = `${temp1++}`
},600000)

var temp2 = 1
setInterval(() => {
    var minute = document.getElementById("minute")
    minute.textContent = `${temp2++}`
},60000)

var temp3 = 0
setInterval(() => {
    var second = document.getElementById("second")
    second.textContent = `${temp3++}`
    
},1000)