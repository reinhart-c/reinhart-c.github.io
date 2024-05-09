var c = $('.homeBg')[0],
    ctx = c.getContext("2d"),
    cw = 0,
    ch = 0,
    hue = 180,
    img = new Image(),
    img2 = new Image(),
    nCubes = 0,
    cubes = [],
    Cube = function(index, _x, _y, _s){
      this.img = img;
      this.img2 = img2;
      this.scale = _s;
      this.x = _x;
      this.y = _y;
      this.z = this.img2_opacity = 0;

      this.draw = () => {
        ctx.translate(this.x, this.y + this.z);
        ctx.drawImage(this.img, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
        ctx.globalAlpha = this.img2_opacity;
        ctx.drawImage(this.img2, -100 / 2 * this.scale, -200 / 2 * this.scale, 100 * this.scale, 200 * this.scale);
        ctx.globalAlpha = 1;
        ctx.translate(-this.x, -(this.y + this.z));
      }
      this.draw();
      
    };

const buffer = document.createElement('canvas');
const btx = buffer.getContext('2d');
btx.fillStyle = '#000000'
btx.fillRect(0, 0, window.width, window.height);
btx.globalAlpha = 1;
btx.globalCompositeOperation = 'destination-in';
ctx.drawImage(buffer, 0, 0);


img.src='../assets/image1.png';
      img2.src='../assets/image2.png';

img.onload = window.onresize = setGrid;

function setGrid(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  cw = Math.ceil(c.width/100+1);
  ch = Math.floor(c.height/25+10);

  cubes = [];
  
  for (var i=_y=0; _y<ch; _y++) {
    for (var _x=0; _x<cw; _x++) {
      if (_y%2==0) cubes.push( new Cube(i, -25+_x*100, -75+_y*25, 0.9) );
      else cubes.push( new Cube(i, 25+_x*100, -75+_y*25, 0.9) );
      i++;
    }
  }

  nCubes = cubes.length;
}

var staggerAnim;
function anim() {
  staggerAnim = gsap.timeline({ onComplete: anim })
                    .add(staggerFrom(gsap.utils.random(0,nCubes,1)))
};

function staggerFrom(from) {
  return gsap.timeline()
    .to(cubes, {
      duration: 1,
      z: 125,      
      ease: 'back.in(3)',
      stagger: {
        yoyo: true,
        amount: 2.5,
        grid: [ch, cw],
        overwrite: 'auto',
        from: from,        
        onComplete: function() {
          gsap.to(this.targets(), {
            duration: 1,
            z: 0,
            ease: 'back.out(3)'
          });
        }
      }
    }, 0)
    .to(cubes, {
      duration: 0.6,
      img2_opacity:1,
      stagger: {
        yoyo: true,
        amount: 2.5,
        grid: [ch, cw],
        overwrite: 'auto',
        from: from,        
        onComplete: function() {
          gsap.to(this.targets(), {
            duration: 0.6,
            img2_opacity: 0
          });
        }
      }
    }, 0)
}
gsap.delayedCall(0.2, anim);

gsap.ticker.add(()=>{
  ctx.globalCompositeOperation='source-over';
  for (var i=0; i<nCubes; i++) cubes[i].draw();
  ctx.globalCompositeOperation='lighter';
});



var menu = document.querySelector('.menu')
var menuButtonOnClick = () => {
  menu.classList.toggle('menuActive')
}