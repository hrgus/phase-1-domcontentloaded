document.addEventListener("DOMContentLoaded", function() {
   
   function changeText(p) {
      return p.textContent = "This is really cool!";
   }
   changeText(document.querySelector('p'));
});

