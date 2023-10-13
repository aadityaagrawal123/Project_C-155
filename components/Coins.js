AFRAME.registerComponent("coins", 
{
    init: function () {

      for (var i = 1; i <= 10; i++) {
          //id
          var id = `coin${i}`;

          //position variables     
          const posX = (Math.random() * 80 + -80) //(Math.random() * (8 - (-8) + 1)) + (-8);  //(0.10 - (-0.10) + 1)) + (-0.10) 
          const posY = (Math.random() * 0 + -1) //(Math.random() * (2 - (-4) + 1)) + (-4);   //(0.2 - (-0.10) + 1 )) + (-0.10)
          const posZ = (Math.random() * 40 + -40) //(Math.random() * (11 - (-10) + 1)) + (-10); 
    
          const position = { x: posX, y: posY, z: posZ };
    
          //call the function
          this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      const coinsmodel = document.querySelector("#coinsmodel");
  
      var coinEl = document.createElement("a-entity");

      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale",{x:2, y:2, z:1});

      coinEl.setAttribute("gltf-model",
          "./assets/coin/scene.gltf"
      );

      coinEl.setAttribute("animation", {
        property : "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
      });

      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereradius: 4,
      });

      coinEl.setAttribute("game-play",{
        elementId: `#${id}`
      });
  
      coinsmodel.appendChild(coinEl);
    }
  });
  
  