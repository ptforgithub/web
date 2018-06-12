console.log("Hello canvas");

function StartButtonClicked() {
    console.log("Hello StartButtonClicked");
    var canvas = document.querySelector('canvas');
    var graph = new Graph(canvas, 600, 400);
    graph.draw();
}

function Graph(canvas, width, height) {
    var that = this;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");

    init();

    function init() {
        that.canvas.width = that.width;
        that.canvas.height = that.height;

        console.log(that.canvas);
    }

    this.draw = function () {
        var circles = [];
        var count = 20;
        var maxSpeed = 8;
        var colors = ["blue", "red", "green", "darkgray"];
        for (var i = 0; i < count; i++) {
            console.log("Creating circle [" + i + "]");
            var x = Math.random() * that.width;
            var y = Math.random() * that.height;
            var dx = (Math.random() - 0.5) * maxSpeed;
            var dy = (Math.random() - 0.5) * maxSpeed;
            var radius = 5 + (Math.random() * 20);
            var color = colors[Math.round(Math.random() * (colors.length - 1))];
            circles[i] = new Circle(that.ctx, x, y, dx, dy, radius, color);
            circles[i].draw();
        }
    }
}

function Circle(drawingCtx, x, y, dx, dy, radius, color) {
    var that = this;
    that.c = drawingCtx;
    that.x = x;
    that.y = y;
    that.dx = dx;
    that.dy = dy;
    that.radius = radius;
    that.color = color;

    this.draw = function () {
        that.c.beginPath();
        that.c.arc(that.x, that.y, that.radius, 0, 2 * Math.PI, false);
        that.c.strokeStyle = that.color;
        that.c.stroke();
    }
}