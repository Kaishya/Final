function setup() {
    createCanvas(800, 800);
    rectMode(CENTER)
    noStroke()

  }

  function draw() {
    hori();
    player.on();
    tagger.on();
    obstac.show()
    keyPressed()
    drawback()
    

    //obstacle()
    
    //lvlCheck(500,0)
    // obstac.borderCheck(0, 100);
  }
  function drawback() {
    if(keyCode === 70 )  {
        let drawOn = true
        drawShapes()
     drawDots()
     drawLines()
    if (isDrawing) {
        drawMouseDot()
        if (keyCode === 77) { // m
            clearDots()
        }
    }
      } else {
          drawOn = false
      }
  }


  var lvl1 = true;
  var lvl2 = true;
  var mS = 2;
  var ns = 0
  var goUp = true;
  var goDw = true;
  var goRt = true;
  var goLf = true;
var playCk = 17.3
var spped = 2.5;
let points = []
let shapes = []
let size = 50
let isDrawing = false


  function hori() {
    fill('245')
    rect(473, 300, 650, 500);
	fill('#CAA5F9');
  noStroke()
	rect(200, 300, 100, 500);
  rect(800, 300, 200, 500);
  stroke(0);
  strokeWeight(5);
  noFill()
  rect(473, 300, 650, 500);
  passLVL(750,0)
    side(160,0)
    walls(0,538)
    taggeM(790,0)
    passTag(200,0)

}


var player = {
  x: 200,
  y: 300,
  ///movePlayer()

on: function movePlayer() {
  fill('#a5f1f9')
  shape = rect(player.x, player.y, 25,25)
  
},
off: function playerOff() {
  fill('#a5f1f6')

}
}

var tagger = {
  x: 750,
  y: 300,
  ///movePlayer()

on: function moveTagger() {
  fill('#darkgrey')
  shape = rect(tagger.x, tagger.y, 20,20)
},

}



function keyPressed() {
  if(keyCode === 38) {
    player.y += -mS
  }
  if(keyCode === 40)  {
    player.y += mS
  }
  if(keyCode === 39) {
    player.x += mS
  }
  if(keyCode === 37)  {
    player.x += -mS
  }
  if(keyCode === 87) {
    tagger.y += -mS
  }
  if(keyCode === 83)  {
    tagger.y += mS
  }
  if(keyCode === 68) {
    tagger.x += mS
  }
  if(keyCode === 65 )  {
    tagger.x += -mS
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


window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40, 87,83,68,39, 70, 77].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);


var obstac = {
  x: 100,
  y: 100,
show: function() {
  ellipseMode(CENTER)
  fill('lightseagreen')
  stroke('black')
  strokeWeight(3)
}}
var drawAllow = false


function passLVL(x,y) {
  if(x > 0) {
    if (player.x >= x) {
      lvl1 = false;
      player.x= 500
      player.y= 200
      
      console.log('otherside')
      drawAllow = true
      revealOth()

    }
  }
}
function passTag(x,y) {
    if(x > 0) {
        if (tagger.x <= x) {
            tagger.x= 700
            tagger.y= 300
          console.log('side')
          revealT()
          revealDr()
        }
      }
    }
function revealOth() {
        document.getElementById('no').innerHTML= "<p> Your Charater made it! Try the aswd keys to move the other <p>"
}
function revealDr() {
        document.getElementById('yes').innerHTML= "<p> Press f to draw on a canvas and reload to refresh canvas <p>"
}
function revealT() {
    document.getElementById('tag').innerHTML= "<p> Your Square made it! Try moving him out of the box to make more designs <p>"
}



// doublerButton.addEventListener('click', revealDr)
function walls(x,y) {
  if(y > 0) {
    if (player.y >= y) {
        player.x= 200
        player.y= 300
      console.log('off')
    }
    
  }
}
function side(x,y) {
    if(x > 0) {
      if (player.x <= x) {
          player.x= 200
          player.y= 300
        console.log('side')
      }
    }
  }


function touch(x,y) {
    if (player.x === tagger.x) {
        console.log('touch')
    }
}

function taggeM(x,y) {
    if(x > 0) {
      if (tagger.x >= x) {
        tagger.x= 200
        tagger.y= 300
      }
    }
  }




function drawMouseDot() {
    fill('black')
    if (currentPointIsCloseToFirst()) {
        fill('lightsteelgray')
    }
    noStroke()

    circle(mouseX, mouseY, size)
//e4d4fad4faef
    stroke('#e4d4fa')
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
    fill('#d4e3fa')
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
        points = []
    isDrawing = false
    } else {
        isDrawing = true
        points.push({x: mouseX, y: mouseY})
    }
}


function clearDots() {
    points = []
    isDrawing = false
}

let rolly = document.getElementById('rolly')
let num = getRandomInt(6)
let haveRoll = false
let die = document.getElementById('die')

function getRandomInt(max) {
    return Math.floor(Math.random() *  6);
}




function theNum() {
    if ([num].includes(1)) {
        document.getElementById('idea').innerHTML= "<p>Draw A Cat<p>"
    }
    if ([num].includes(2)) {
        document.getElementById('idea').innerHTML= "<p>Draw A Beach Vaction<p>"
    }
    if ([num].includes(3)) {
        document.getElementById('idea').innerHTML= "<p>Draw A Self-Portrait<p>"
    }
    if ([num].includes(4)) {
        document.getElementById('idea').innerHTML= "<p>Draw A Pencil<p>"
    }
    if ([num].includes(5)) {
        document.getElementById('idea').innerHTML= "<p>Draw A Castle<p>"
    }

}

function test() {
    haveRoll = true
    console.log(num)
    odds()
    
}

let odd = 0
let numb = [1,2,3,4,5,6,7,8]
function odds() {
numb.forEach(num => {
    if (num % 2 != 1) odd++
    console.log(odd)
})
}

