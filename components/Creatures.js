AFRAME.registerComponent("fish", 
{
    init: function () {

        for (var i=1; i <= 10; i++) {
            var id = `fish${i}`;

          const posX = (Math.random() * 80 + -50); //Math.floor((Math.random() * (8 - (-8) + 1) ) + (-8));  //(0.10 - (-0.10) + 1)) + (-0.10) 
          const posY = (Math.random() * 0.5 + -1) //Math.floor((Math.random() * (2 - (-1) + 1) ) + (-1));   //(0.2 - (-0.10) + 1 )) + (-0.10)
          const posZ = (Math.random() * 40 + -40)  //Math.floor((Math.random() * (2 - (-8) + 1) ) + (-8));
        
          const position = { x: posX, y: posY, z: posZ };
        
            //call the function
            this.spawnFish(id, position);
        }
    },

    spawnFish : (id, position) => {
        const fishmodel = document.querySelector("#fishmodel");

        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{x:1.5, y:1, z:2});
        fishEl.setAttribute("rotation",{x:0, y:180, z:0});

        fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");

        fishEl.setAttribute("animation", {
            property: "position",
            to: "40 0 20",
            loop: "true",
            dur: 20000
          });

          fishEl.setAttribute("static-body", {
            shape: "sphere",
            sphereradius: 4,
          });
      
          fishEl.setAttribute("game-play",{
            elementId: `#${id}`
          });
          

        fishEl.setAttribute("animation-mixer",{});
        fishmodel.appendChild(fishEl);
    }
} 
)