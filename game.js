AFRAME.registerComponent("game-play", {
    schema:{
        elementId: {type:"string", default:"#coin1"}
    },

    update: function(){
        this.isCollided(this.data.elementId);
    },

    init: function () {
      var duration = 120;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },

    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
    
      setInterval(()=>{
        if (duration >= 0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;
        } 
        else {
          this.gameOver();      
        }
      })
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
      if (elementId.includes("#coin")) {
        console.log(elementId + " collision");
        element.setAttribute("visible", false)
        this.updateScore()
        this.updateTreasure()
      } 
      else if (elementId.includes("#fish")) {
        console.log("fish collision");
      }
    });
    },

    updateScore: function (){
      const element = document.querySelector("#score");
      var count = element.getAttribute("text").value;
      var currentScore = parseInt(count)
      currentScore+=50;
      element.setAttribute("text", {value: currentScore})
    },

    updateTreasure: function (){
      const element = document.querySelector("#coin");
      var count = element.getAttribute("text").value;
      var currentCoins = parseInt(count)
      currentCoins--;
      element.setAttribute("text", {value: currentCoins})
    },
})
