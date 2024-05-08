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

img.src='../assets/image1_black.png';
img2.src='../assets/image2_black.png';

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
  staggerAnim = gsap.timeline({ onComplete: randImg })
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

function randImg(){
  gsap.to('.homeBg', {duration:1, onComplete:function(){
  img.onload = function(){
    gsap.delayedCall(0.2, anim);
  }
  switch(Math.floor(Math.random() * 6)){
    case 0:
      img.src='../assets/image1_white.png';
      img2.src='../assets/image2_white.png';
      break;
    case 1:
      img.src='../assets/image1_black.png';
      img2.src='../assets/image2_black.png';
      break;
    case 2:
      img.src='../assets/image1_blue.png';
      img2.src='../assets/image2_blue.png';
      break;
    case 3:
      img.src='../assets/image1_orange.png';
      img2.src='../assets/image2_orange.png';
      break;
    case 4:
      img.src='../assets/image1_green.png';
      img2.src='../assets/image2_green.png';
      break;
    case 5:
      img.src='../assets/image1_purple.png';
      img2.src='../assets/image2_purple.png';
      break;
  }
}});
}

gsap.ticker.add(()=>{
  // ctx.clearRect(0,0,c.width,c.height);
  ctx.globalCompositeOperation='source-over';
  for (var i=0; i<nCubes; i++) cubes[i].draw();
  ctx.globalCompositeOperation='lighter';
  // ctx.fillRect(0, 0, c.width, c.height);
});