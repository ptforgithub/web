console.log("Hello canvas");

var graphs = [];

function CreateGraphClicked() {
    console.log("Hello CreateGraphClicked");
    var canvas1 = document.getElementById("Graph1");// document.querySelector('canvas');
    var canvas2 = document.getElementById("Graph2");
    graphs[0] = new Graph(canvas1, 300, 200);
    graphs[1] = new Graph(canvas2, 300, 200);
    graphs.forEach((graph, index) => {
        graph.draw();
    });
}

function StartStopClicked() {
    graphs.forEach((graph, index) => {
        graph.startStopAnimation();
    });
}

function Graph(canvas, width, height) {
    var that = this;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.ctx = canvas.getContext("2d");
    that.stopAnimation = false;
    var animationFrameHandle;
    this.circles = [];

    init();

    function init() {
        that.canvas.width = that.width;
        that.canvas.height = that.height;
    }

    this.draw = function () {
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
            that.circles[i] = new Circle(that.ctx, x, y, dx, dy, radius, color, that.width, that.height);
            that.circles[i].draw();
        }
    }

    this.animate = function () {
        animationFrameHandle = requestAnimationFrame(that.animate);
        if (that.startAnimation == false) {
            return;
        }
        that.ctx.clearRect(0, 0, that.width, that.height);

        that.circles.forEach((circle, index) => {
            circle.update();
        });
    }

    that.startStopAnimation = function () {
        that.startAnimation = !that.startAnimation;
        if (that.startAnimation === true) {
            that.animate();
        }
        else {
            cancelAnimationFrame(animationFrameHandle);
        }
    }

    that.canvas.addEventListener('mousemove', function (event) {
        console.log("" + event.offsetX + ", " + event.offsetY);
        //that.canvas.style.left = "100px"; //(that.canvas.offsetLeft + 2) + "100px";
        //that.canvas.style.top = "200px";// (that.canvas.offsetTop + 2) + "200px";
        var divElement = document.getElementById("DivForFirstCanvas");
        if (divElement) {
            divElement.style.left = divElement.offsetLeft + 2 + "px";
            divElement.style.top = divElement.offsetTop + 2 + "px";
        }
    });
}

function Circle(drawingCtx, x, y, dx, dy, radius, color, boundingWidth, boundingHeight) {
    var that = this;
    that.c = drawingCtx;
    that.x = x;
    that.y = y;
    that.dx = dx;
    that.dy = dy;
    that.radius = radius;
    that.color = color;
    that.boundingWidth = boundingWidth;
    that.boundingHeight = boundingHeight;

    this.draw = function () {
        that.c.beginPath();
        that.c.arc(that.x, that.y, that.radius, 0, 2 * Math.PI, false);
        that.c.strokeStyle = that.color;
        that.c.stroke();
    }

    this.update = function () {
        var newX = that.x + that.dx;
        var newY = that.y + that.dy;

        if (newX - that.radius < 0) {
            newX = that.radius;
            that.dx = -that.dx;
        }
        if (newX + that.radius > that.boundingWidth) {
            newX = that.boundingWidth - that.radius;
            that.dx = -that.dx;
        }

        if (newY - that.radius < 0) {
            newY = that.radius;
            that.dy = -that.dy;
        }
        if (newY + that.radius > that.boundingHeight) {
            newY = that.boundingHeight - that.radius;
            that.dy = -that.dy;
        }

        that.x = newX;
        that.y = newY;

        that.draw();
    }

}