//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    this.data.speedOfRotation += 0.08;
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: {type:"number", default: 0}    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation");
      var diver_rotation = this.data.speedOfRotation;

      this.data.speedOfAscent = this.el.getAttribute("position");
      var diver_position = this.data.speedOfAscent;

      if (e.key === "ArrowRight" || e.key === "68") {
        if (diver_rotation.y > -360) {
          diver_rotation.y -= 0.5;
          this.el.setAttribute("rotation", diver_rotation)
        }

        if (diver_position.x < 20) {
          diver_position.x += 0.05;
          this.el.setAttribute("position", diver_position)
        }
      }

      if (e.key === "ArrowLeft" || e.key === "65") {
        if (diver_rotation.y < 360) {
          diver_rotation.y += 0.5;
          this.el.setAttribute("rotation", diver_rotation)

          if (diver_position.x > -20) {
            diver_position.x -= 0.05;
            this.el.setAttribute("position", diver_position)
          }
        }
      }
      
      if (e.key === "ArrowUp" || e.key === "87") {
        if (diver_position.z > -25) {
          diver_position.z -= 0.05;
          this.el.setAttribute("position", diver_position)
        }


      if (e.key === "ArrowDown" || e.key === "83") {
        if (diver_position.z < 25) {
          diver_position.z += 0.05;
          this.el.setAttribute("position", diver_position)
        }
      }

  }});
  }
});






