function setup() {
    createCanvas(800, 800);
    rectMode(CENTER)
    noStroke()

  }
  function draw() {
    hori();
    player.on();
    tagger.mousemove();
    obstac.show()
    keyPressed()
    //obstacle()
    
    //lvlCheck(500,0)
    // obstac.borderCheck(0, 100);
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

  function hori() {
    fill('255')
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
//   if(keyCode === 87) {
//     tagger.y += -mS
//   }
//   if(keyCode === 83)  {
//     tagger.y += mS
//   }
//   if(keyCode === 68) {
//     tagger.x += mS
//   }
//   if(keyCode === 65 )  {
//     tagger.x += -mS
//   }
  
}
window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40, 87,83,68,39].indexOf(e.keyCode) > -1) {
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

function passLVL(x,y) {
  if(x > 0) {
    if (player.x >= x) {
      lvl1 = false;
      player.x= 200
      player.y= 300
    }
  }
}

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


// var obs
// function obstacle() {
//     obs = new component(10, 200, "green", 300, 120);
// }