

phina.globalize();

phina.define('MainScene', {
  superClass: 'CanvasScene',
  
  init: function() {
    this.superInit();
    
    // ラベルを表示
    var label = Label('Hello, phina.js!').addChildTo(this);
    label.x = 320; // x 座標を指定
    label.y = 480; // y 座標を指定
    label.fill = 'red'; // 色を変更
    label.fontSize = 64; // フォントサイズを変更
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  
  app.run();
});
