window.onload = function () {
  var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    w,
    h;
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  
  var clearColor = "rgba(0, 0, 0, .1)", 
    wordColor = "#00ced1", 
    words =
      "ABΓ∆EZHΘIKaΛMNΞOけազէրտեըիոպխսդֆքհճկլմւցգվբն刀ΠPΣTΥΦXΨΩ坤埉垞坊在坤〩,./;'[]ﷹαβγδεけ∑ξζηθικλμνξοπρστυφχψω",
    wordsArr = words.split(""), 
    font_size = 16, 
    clumns = w / font_size, 
    drops = [];

  for (var i = 0; i < clumns; i++) {
    drops[i] = 1;
  }

  function draw() {
    context.save();
    context.fillStyle = wordColor;
    context.font = font_size + "px arial";
    
    
    for (var i = 0; i < drops.length; i++) {
      var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
      context.fillText(text, i * font_size, drops[i] * font_size);
      
      if (drops[i] * font_size > h && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    context.restore();
  }

  
  (function drawFrame() {
    window.requestAnimationFrame(drawFrame);
    context.fillStyle = clearColor;
    context.fillRect(0, 0, w, h);

    draw();
  })();

  //resize
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ``;
  }
  canvas.addEventListener("resize", resize);
};
