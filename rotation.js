AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfMovement: { type: "number", default: 0 }
  },

  init: function () {
    window.addEventListener("keydown", (e) => {

      this.data.speedOfRotation = this.el.getAttribute("rotation")   
      this.data.speedOfMovement = this.el.getAttribute("position")

      var diverRotation = this.data.speedOfRotation   
      var diverPosition = this.data.speedOfMovement

      if (e.key === "ArrowDown") {
        console.log("hi")
        if (diverPosition.z < 20) {
          diverPosition.z += 0.1
          this.el.setAttribute("position", diverPosition)
        }
      }
      if (e.key === "ArrowUp") {
        if (diverPosition.z> -10) {
          diverPosition.z -= 0.1
          this.el.setAttribute("position", diverPosition)
        }
      }
      if (e.key === "ArrowRight") {
        if (diverRotation.y > -360) {
          diverRotation.y -= 0.5
          this.el.setAttribute("rotation", diverRotation)
        }
        if (diverPosition.x < 20) {
          diverPosition.x += 0.05
          this.el.setAttribute("position", diverPosition)
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.y <360) {
          diverRotation.y += 0.5
          this.el.setAttribute("rotation", diverRotation)
        }
        if (diverPosition.x > -20) {
          diverPosition.x -= 0.05
          this.el.setAttribute("position", diverPosition)
        }
      }
    });
  }
});