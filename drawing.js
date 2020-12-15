

// var countDownDate = new Date("0:0:59").getTime();
// var newPlayer = Math.floor((timeleft % (1000 * 60)) / 1000);

// var myfunc = setInterval(function() {
//     var now = new Date().getTime();
//     var timeleft = countDownDate - now;
//     var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
//     document.getElementById("secs").innerHTML = seconds + "s "

//     if (timeleft < 0) { 
//         document.getElementById("secs").innerHTML = ""
//         document.getElementById("end").innerHTML = "TIME UP!!";
//     }
// }, 1000);


let points = []
let shapes = []
let size = 50
let isDrawing = false

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background('wheat')

    drawShapes()

    drawDots()
    drawLines()
    if (isDrawing) {
        drawMouseDot()
    }
}

function drawShapes() {
    stroke('purple')
    strokeWeight(7)
    shapes.forEach(shape => {
        for (let i = 0; i < shape.length - 1; i++) {
            line(shape[i].x, shape[i].y,
                shape[i + 1].x, shape[i + 1].y)
        }
        line(shape[0].x, shape[0].y, 
            shape[shape.length-1].x,
            shape[shape.length-1].y)
    }) 
}

function drawMouseDot() {
    fill('lightyellow')
    if (currentPointIsCloseToFirst()) {
        fill('lightsteelgray')
    }
    noStroke()

    circle(mouseX, mouseY, size)

    stroke('white')
    strokeWeight(7)

    line(mouseX, mouseY, 
         points[points.length-1].x, points[points.length-1].y)
}

function currentPointIsCloseToFirst() {
    return distance({ x: mouseX, y: mouseY }, points[0]) < size
}

function distance(pt1, pt2) {
    let deltaX = pt2.x - pt1.x
    let deltaY = pt2.y - pt1.y
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

function drawDots() {
    fill('lightpink')
    noStroke()
    
    points.forEach(point => {
        circle(point.x, point.y, size)
    })
}

function drawLines() {
    stroke('gray')
    strokeWeight(7)

    for (let i = 0; i < points.length - 1; i++) {
        line(points[i].x, points[i].y, 
             points[i+1].x, points[i+1].y)
    }
}

function mousePressed() {
    if (isDrawing && currentPointIsCloseToFirst()) {
        shapes.push(points)
        clearDots()
    } else {
        isDrawing = true
        points.push({x: mouseX, y: mouseY})
    }
}

function keyPressed() {
    if (keyCode === 32) { // spacebar
        clearDots()
    }
}

function clearDots() {
    points = []
    isDrawing = false
}

let amountEl = document.getElementById('amount')
let scoreEl = document.getElementById('score')
let ideaButton = document.getElementById('idea')
let clickChange = 1
let clickCount = 0
let haveIdea = false



function getRandomInt(max) {
    return Math.floor(Math.random() *  7) + 1;
}


function wantIdea() {
    clickCount = clickCount + clickChange
    scoreEl.innerHTML = clickCount
    if (clickCount === 15) {
        console.log('hi')
        if(!haveIdea) {
            ideaButton.classList.remove('remove')
        } 
    }
}


// function getNumber() {
//     haveIdea = true
//     clickcount = clickcount - 5
//     amountEl.innerHTML = clickcount
//     ideaButton.classList.add('remove')
// }
// ideaButton.addEventListener('click', getNumber)
// //idea.addEventListener('click', getNumber)
// let removeIdea = document.getElementById('remove')

 scoreEl.addEventListener('click', wantIdea)
