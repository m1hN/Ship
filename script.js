// Canvas - Pirate Ship

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// Variables

let treelog1X = 20;
let treelog2X = 60;
let treelog3X = 100;
let treelog4X = 480;
let treelog5X = 450;
let treelog6X = 430;

let cloud1X = 50;
let cloud2X = 250;
let cloud3X = 400;

let islandLeftX = 100;
let islandRightX = 400;

let sunY = 80;
let moonY = -510;

let stoneX = 0;
let stone1X = 500;

let shipX = 250;

let r1 = 173;
let g1 = 216;
let b1 = 230;

let r2 = 255;
let g2 = 255;
let b2 = 224;

let r3 = 154;
let g3 = 205;
let b3 = 50;

let fish1X = 400;
let fish2X = 250;
let fish3X = 100;

// rgb(255, 140, 0) Orange
// rgb(0, 0, 139) Dark blue
// rgb(0, 0, 0) black

requestAnimationFrame(draw);

function draw() {
  //   requestAnimationFrame(draw);
  // Sky
  var grd = ctx.createLinearGradient(0, 0, 500, 0);
  grd.addColorStop(0, `rgb(${r1}, ${g1}, ${b1})`);
  grd.addColorStop(1, `rgb(${r2}, ${g2}, ${b2})`);
  if (sunY > 200 && sunY < 800) {
    if (r1 > 0) {
      r1 -= 0.2;
    }
    if (g1 > 0) {
      g1 -= 0.2;
    }
    if (b1 > 0) {
      b1 -= 0.2;
    }

    if (r2 > 0) {
      r2 -= 0.2;
    }
    if (g2 > 0) {
      g2 -= 0.2;
    }
    if (b2 > 139) {
      b2 -= 0.2;
    }
  } else {
    if (r1 < 173) {
      r1 += 1;
    }
    if (g1 < 216) {
      g1 += 1;
    }
    if (b1 < 230) {
      b1 += 1;
    }

    if (r2 < 255) {
      r2 += 1;
    }
    if (g2 < 255) {
      g2 += 1;
    }
    if (b2 < 224) {
      b2 += 1;
    }
  }

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 500, 500);

  // Sun
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(450, sunY, 30, 0, 2 * Math.PI);
  ctx.fill();
  sunY += 0.4;

  // Moon
  ctx.beginPath();
  ctx.fillStyle = "lightgrey";
  ctx.arc(450, moonY, 30, 0, 2 * Math.PI);
  ctx.fill();
  moonY += 0.4;

  // Island Left
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";

  var grd = ctx.createLinearGradient(0, 0, 500, 0);
  grd.addColorStop(0, "green");
  grd.addColorStop(1, `rgb(${r3}, ${g3}, ${b3})`);

  if (r3 > 0) {
    r3 -= 0.2;
  }
  if (g3 > 100) {
    g3 -= 0.2;
  }
  if (b3 > 0) {
    b3 -= 0.2;
  }

  ctx.fillStyle = grd;
  ctx.arc(islandLeftX, 400, 150, 0, 2 * Math.PI);
  ctx.fill();
  islandLeftX -= 0.4;

  // Island Right
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "yellow";
  var grd = ctx.createLinearGradient(0, 0, 1000, 0);
  grd.addColorStop(0, "green");
  grd.addColorStop(1, `rgb(${r3}, ${g3}, ${b3})`);

  if (r3 > 0) {
    r3 -= 0.2;
  }
  if (g3 > 100) {
    g3 -= 0.2;
  }
  if (b3 > 0) {
    b3 -= 0.2;
  }

  ctx.fillStyle = grd;
  ctx.arc(islandRightX, 400, 200, 0, 2 * Math.PI);
  ctx.fill();
  islandRightX -= 0.4;

  // Sea
  var grd = ctx.createLinearGradient(100, 100, 0, 250);
  grd.addColorStop(0, "blue");
  grd.addColorStop(1, "darkblue");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 350, 500, 150);

  // Trees
  drawTree(treelog1X, 300);
  treelog1X--;
  drawTree(treelog2X, 300);
  treelog2X -= 2;
  drawTree(treelog3X, 300);
  treelog3X--;
  drawTree(treelog4X, 300);
  treelog4X -= 3;
  drawTree(treelog5X, 300);
  treelog5X--;
  drawTree(treelog6X, 300);
  treelog6X -= 2;

  // Clouds
  drawCloud(cloud1X, 50);
  cloud1X--;
  drawCloud(cloud2X, 160);
  cloud2X -= 0.4;
  drawCloud(cloud3X, 21);
  cloud3X -= 1.2;

  // Ship
  drawShip(shipX, 300);

  // Sea
  var grd = ctx.createLinearGradient(100, 100, 0, 250);
  grd.addColorStop(0, "blue");
  grd.addColorStop(1, "darkblue");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 350, 500, 150);

  // Fish
  drawRedFish(fish1X, 450);
  fish1X -= 2;
  drawCyanFish(fish2X, 390);
  fish2X -= 0.8;
  drawYellowFish(fish3X, 420);
  fish3X -= 0.9;

  // Stone
  drawStone(stoneX, 500);
  stoneX--;
  drawStone(stone1X, 500);
  stone1X--;

  // Text
  ctx.font = "15px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Art by M. Le", 400, 490);

  // Objects coming back

  // Trees
  if (treelog1X == -20) {
    treelog1X = 550;
  }
  if (treelog2X == -20) {
    treelog2X = 550;
  }
  if (treelog3X == -20) {
    treelog3X = 550;
  }
  if (treelog4X == -20) {
    treelog4X = 550;
  }
  if (treelog5X == -20) {
    treelog5X = 550;
  }
  if (treelog6X == -20) {
    treelog6X = 550;
  }

  // Island
  if (islandLeftX <= -200) {
    islandLeftX = 700;
  }
  if (islandRightX <= -200) {
    islandRightX = 700;
  }

  // Cloud

  if (cloud1X <= -100) {
    cloud1X = 550;
  }

  if (cloud2X <= -100) {
    cloud2X = 550;
  }
  if (cloud3X <= -1000) {
    cloud3X = 550;
  }

  // Fish

  if (fish1X <= -100) {
    fish1X = 550;
  }

  if (fish2X <= -100) {
    fish2X = 550;
  }

  if (fish3X <= -100) {
    fish3X = 550;
  }

  // Stone

  if (stoneX <= -500) {
    stoneX = 550;
  }
  if (stone1X <= -500) {
    stone1X = 550;
  }

  // Sun
  if (sunY >= 910) {
    sunY = -100;
  }

  if (moonY >= 910) {
    moonY = -30;
  }
  requestAnimationFrame(draw);
}

// HELPER FUNCTIONS

//   Keyboard handler

document.addEventListener("keypress", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyA") {
    shipX -= 20;
  }
  if (event.code == "KeyD") {
    shipX += 20;
  }
  if (event.code == "KeyW") {
    fish1X += 10;
  }
}

function drawTree(x, y) {
  ctx.fillStyle = "maroon";
  ctx.fillRect(x, y, 10, 50); // x: 20 y: 300
  ctx.beginPath();
  ctx.fillStyle = "darkgreen";
  ctx.moveTo(x + 5, y - 20);
  ctx.lineTo(x - 10, y + 20);
  ctx.lineTo(x + 20, y + 20);
  ctx.lineTo(x + 5, y - 20);
  ctx.fill();
}

function drawShip(x, y) {
  // Ship Body
  ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.arc(x, y, 80, 0, Math.PI); // x = 250 y = 300
  ctx.fill();

  // Ship Pole
  ctx.fillStyle = "dark orange";
  ctx.fillRect(x - 10, y - 150, 15, 200);

  // Ship Flag
  ctx.lineWidth = 1;
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.moveTo(x + 5, y - 150);
  ctx.lineTo(x + 5, y - 80);
  ctx.lineTo(x + 100, y - 115);
  ctx.lineTo(x + 5, y - 150);
  ctx.fill();

  // Cannons
  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.arc(x, y + 25, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y + 25, 7, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.arc(x - 50, y + 25, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x - 50, y + 25, 7, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "grey";
  ctx.arc(x + 50, y + 25, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 50, y + 25, 7, 0, 2 * Math.PI);
  ctx.fill();

  // Ship Stand
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(x + 60, y + 10);
  ctx.lineTo(x + 110, y - 35);
  ctx.stroke();
}

function drawCloud(x, y) {
  // Clouds
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x + 40, y, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x + 60, y, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x + 20, y - 20, 30, 0, 2 * Math.PI);
  ctx.fill();
}

function drawYellowFish(x, y) {
  ctx.lineWidth = 10;
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y + 10);
  ctx.lineTo(x + 20, y - 10);
  ctx.lineTo(x, y);
  ctx.fill();
}

function drawRedFish(x, y) {
  ctx.lineWidth = 10;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y + 10);
  ctx.lineTo(x + 20, y - 10);
  ctx.lineTo(x, y);
  ctx.fill();
}

function drawCyanFish(x, y) {
  ctx.lineWidth = 10;
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 20, y + 10);
  ctx.lineTo(x + 20, y - 10);
  ctx.lineTo(x, y);
  ctx.fill();
}

function drawStone(x, y) {
  // Underwater Stone
  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 50, y + 50);
  ctx.lineTo(x + 25, y - 50);
  ctx.lineTo(x, y + 50);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 200, y + 50);
  ctx.lineTo(x + 250, y + 50);
  ctx.lineTo(x + 225, y - 50);
  ctx.lineTo(x + 200, y + 50);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 100, y + 50);
  ctx.lineTo(x + 150, y + 50);
  ctx.lineTo(x + 125, y - 75);
  ctx.lineTo(x + 100, y + 50);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 40, y + 50);
  ctx.lineTo(x + 140, y + 50);
  ctx.lineTo(x + 80, y - 95);
  ctx.lineTo(x + 40, y + 50);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 440, y + 50);
  ctx.lineTo(x + 490, y + 50);
  ctx.lineTo(x + 480, y - 95);
  ctx.lineTo(x + 440, y + 50);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + 340, y + 50);
  ctx.lineTo(x + 240, y + 50);
  ctx.lineTo(x + 380, y - 95);
  ctx.lineTo(x + 340, y + 50);
  ctx.fill();
}
