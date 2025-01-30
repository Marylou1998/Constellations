let stars = [];
let selectedStar = null;
let lines = [];
let selectedBackgroundImage = null;
let images = {};
let background2Images = []; // Groupe d'images pour enfants
let background3Images = []; // Groupe d'images pour enfants

let imagePositions = [];

function preload() {
  images['enfant-1'] = loadImage('images/enfant-1.png');
  images['enfant-2'] = loadImage('images/enfant-2.png');
  images['enfant-3'] = loadImage('images/enfant-3.png');
  images['enfant-4'] = loadImage('images/enfant-4.png');
  images['enfant-5'] = loadImage('images/enfant-5.png');
  images['enfant-6'] = loadImage('images/enfant-6.png');
  images['enfant-7'] = loadImage('images/enfant-7.png');
  images['enfant-8'] = loadImage('images/enfant-8.png');
  images['enfant-9'] = loadImage('images/enfant-9.png');
  images['enfant-10'] = loadImage('images/enfant-10.png');
  images['enfant-11'] = loadImage('images/enfant-11.png');
  images['enfant-12'] = loadImage('images/enfant-12.png');
  images['enfant-13'] = loadImage('images/enfant-13.png');
  images['enfant-14'] = loadImage('images/enfant-14.png');
  images['enfant-15'] = loadImage('images/enfant-15.png');
  images['enfant-16'] = loadImage('images/enfant-16.png');
  images['enfant-17'] = loadImage('images/enfant-17.png');
  images['enfant-18'] = loadImage('images/enfant-18.png');

  background2Images = [
    images['enfant-1'],
    images['enfant-2'],
    images['enfant-3'],
    images['enfant-4'],
    images['enfant-5'],
    images['enfant-6'],
    images['enfant-7'],
    images['enfant-8'],
    images['enfant-9']
  ];

  background3Images = [
    images['enfant-10'],
    images['enfant-11'],
    images['enfant-12'],
    images['enfant-13'],
    images['enfant-14'],
    images['enfant-15'],
    images['enfant-16'],
    images['enfant-17'],
    images['enfant-18']
  ];
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  generateStars(800);
}

function draw() {
  clear();

  if (selectedBackgroundImage === 'background2') {
    displayImages(background2Images);
  } else if (selectedBackgroundImage === 'background3') {
    displayImages(background3Images);
  } else {
    background(0);
  }

  drawStarsAndLines();
}

function displayImages(imageGroup) {
  imagePositions = [];
  const margin = 2;
  const gridSize = 3;

  const availableWidth = width - 2 * margin;
  const availableHeight = height - 2 * margin;

  const cellWidth = availableWidth / gridSize;
  const cellHeight = availableHeight / gridSize;

  let index = 0;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (index >= imageGroup.length) break;

      const img = imageGroup[index];

      const aspectRatio = img.width / img.height;

      let imgH = cellWidth;
      let imgW = imgH /aspectRatio;

      if (imgH > cellHeight * 0.9) {
        imgH = cellHeight * 0.9;
        imgW = imgH * aspectRatio;
      }

      const x = margin + col * cellWidth + (cellWidth - imgW) / 2;
      const y = margin + row * cellHeight + (cellHeight - imgH) / 2;

      imagePositions.push({ img, x, y, w: imgW, h: imgH });
      index++;
    }
  }

  for (let imgData of imagePositions) {
    image(imgData.img, imgData.x, imgData.y, imgData.w, imgData.h);
  }
}


function drawStarsAndLines() {
  for (let star of stars) {
    fill(star.color);
    stroke(star.color);
    strokeWeight(1);
    ellipse(star.x, star.y, star.size, star.size);
  }

  stroke(255);
  strokeWeight(3);

  for (let lineCoords of lines) {
    line(lineCoords.start.x, lineCoords.start.y, lineCoords.end.x, lineCoords.end.y);
  }

  if (selectedStar != null) {
    stroke(255);
    line(selectedStar.x, selectedStar.y, mouseX, mouseY);
  }
}

function generateStars(num) {
  let predefinedColors = ["#FFE666", "#007187", "#E6FFFF", "#FFD700", "#FFC300", "#FFDF80", "#005F73", "#006A8B", "#008597", "#0097A7", "#CCFFFF", "#B3FFFF"];
  let minDistance = 10;

  for (let i = 0; i < num; i++) {
    let validPosition = false;
    let star;

    while (!validPosition) {
      let x = random(width);
      let y = random(height);
      let size = random(7, 15);
      let starColor = color(random(predefinedColors));

      star = { x: x, y: y, size: size, color: starColor };
      validPosition = stars.every(otherStar => dist(star.x, star.y, otherStar.x, otherStar.y) >= minDistance + (star.size + otherStar.size) / 2);
    }

    stars.push(star);
  }
}

function changeBackground() {
  let imageSelect = document.getElementById("background-image").value;

  if (imageSelect === "none") {
    selectedBackgroundImage = null;
  } else {
    selectedBackgroundImage = imageSelect;
  }
}

function mousePressed() {
  for (let star of stars) {
    if (dist(mouseX, mouseY, star.x, star.y) < star.size / 2) {
      selectedStar = createVector(star.x, star.y);
      break;
    }
  }
}

function mouseReleased() {
  if (selectedStar != null) {
    let hoveredStar = stars.find(star => dist(mouseX, mouseY, star.x, star.y) < star.size / 2);
    if (hoveredStar && !selectedStar.equals(createVector(hoveredStar.x, hoveredStar.y))) {
      lines.push({ start: selectedStar.copy(), end: createVector(hoveredStar.x, hoveredStar.y) });
    }
    selectedStar = null;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Delete') {
    clearCanvas();
  }
});

function clearCanvas() {
  lines = [];
  console.log('Canvas cleared!');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    event.preventDefault();
    undoLastLine();
  }
});

function undoLastLine() {
  if (lines.length > 0) {
    lines.pop();
    console.log('Dernière ligne annulée !');
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveImage();
  }
});

function saveImage() {
  saveCanvas('constellations', 'png');
}
