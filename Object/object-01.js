const rectangle = {
  length: 10,
  breadth: 5,

  draw: function() {
    console.log("Drawing rectangle...");
  },

  area:function() {
    console.log(`Area of rectangle is ${this.length * this.breadth}`);
  }
};

console.log(rectangle);
rectangle.draw();
rectangle.area();