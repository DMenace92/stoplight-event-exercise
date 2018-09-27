(function() {
  'use strict';
const stopButton = document.getElementById("stopButton");
const slowButton = document.getElementById("slowButton");
const goButton = document.getElementById("goButton")

  // YOUR CODE HERE
  stopButton.addEventListener("click",function(){
    document.getElementById("stopLight").classList.toggle("stop")
  });
  slowButton.addEventListener("click",function(){
    document.getElementById("slowLight").classList.toggle("slow")
  });
  goButton.addEventListener("click",function(){
    document.getElementById("goLight").classList.toggle("go")
  });
  stopButton.addEventListener("mouseenter", function(){
    console.log(`Entered ${stopButton.textContent}button`)
  })
  stopButton.addEventListener("mouseleave", function(){
    console.log(`Left ${stopButton.textContent}button`)
  })
  slowButton.addEventListener("mouseenter",function(){
    console.log(`Entered ${slowButton.textContent}button`)
  })
  slowButton.addEventListener("mouseleave",function(){
    console.log(`Left ${slowButton.textContent}button`)
  })
  goButton.addEventListener("mouseenter",function(){
    console.log(`Entered ${goButton.textContent}button`)
  })
  goButton.addEventListener("mouseleave",function(){
    console.log(`Left ${goButton.textContent}button`)
  })
  document.getElementById("controls").addEventListener("click",function(e){
     const action = e.target.id.slice(0,-6)
     if (e.target && e.target.classList.contains('button')) {
       if (document.getElementById(`${action}Light`).classList.contains(action)) {
         console.log(`${e.target.textContent} bulb on`);
       } else {
         console.log(`${e.target.textContent} bulb off`);
       }
     }
   })
})();
