/*
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
*/

function countdown(start) {

    let intervalId = setInterval(
    function () {
        start--
        if(start == 0) {
            console.log("DONE!")
            clearInterval(intervalId)
        } else {
            console.log(start)
        }
    }, 1000)
}

countdown(4)

/*
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
*/

function randomGame() {
    let attempts = 0
    let intervalId = setInterval(
        function() {
            let result = Math.random()
            attempts++
            console.log(`Number we got is ${result}`)
            if (result > .75) {
                clearInterval(intervalId)
                console.log(`It took ${attempts} attempts to find the number`)
            } 
        }, 1000 )
}
    

randomGame()


