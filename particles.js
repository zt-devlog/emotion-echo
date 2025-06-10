let particles = [];
let emotionColor = '#999999';

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    cnv.style('z-index', '-1');
    cnv.style('position', 'fixed');  /* Most reliable for background */
    cnv.style('left', '0');
    cnv.style('top', '0');
    cnv.style('pointer-events', 'none'); /* Prevents interference */
    noStroke();
    for (let i = 0; i < 60; i++) {
      particles.push(new FloatingParticle());
    }
  }
  
  function windowResized() {  /* Handle window resizing */
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
  clear();
  for (let p of particles) {
    p.update();
    p.display();
  }
}

class FloatingParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(4, 12);
    this.alpha = random(80, 180);
    this.speed = random(0.2, 1.2);
    this.offset = random(0.5, 2);
  }

  update() {
    this.y -= this.speed;
    this.x += sin(frameCount * 0.01 + this.offset) * 0.2;

    if (this.y < -10 || this.x < -10 || this.x > width + 10) {
      this.reset();
      this.y = height + random(20, 100);
    }
  }

  display() {
    fill(colorAlpha(emotionColor, this.alpha));
    ellipse(this.x, this.y, this.size);
  }
}

function colorAlpha(hex, alpha) {
  const c = color(hex);
  return color(`rgba(${red(c)}, ${green(c)}, ${blue(c)}, ${alpha / 255})`);
}

function setEmotionTone(emotion) {
  const tones = {
    'happy': "#FFD93D",
    'joyful': "#FFAA4C",
    'content': "#B5EAD7",
    'anxious': "#89C2D9",
    'overwhelmed': "#999C92",
    'lonely': "#B49FCC",
    'sad': "#B497BD",
    'grieving': "#876C75",
    'angry': "#E63946",
    'frustrated': "#FF7F50",
    'hopeful': "#A3D65C",
    'nostalgic': "#FFC888",
    'excited': "#FF8B6A",
    'tired': "#B6ADA2",
    'peaceful': "#B8E8C8",
    'lost': "#AAAAAA",
    'default': "#CCCCCC",
  };
  emotionColor = tones[emotion] || tones.default;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
