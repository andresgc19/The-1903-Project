
function box(){

        var msg= "Check our Instagram profile!";
        var link_instagram = msg.link("https://www.instagram.com/1903_photo/");

        var userval = confirm("Do you want to follow us on Instagram?");
        if(userval==true)
        {
            window.location.href="https://www.instagram.com/1903_photo/";
        }
        else{
          alert("Don't miss the latest updates on our profie");
        }

}


function newImage() {
     var image = document.getElementById('myImage');
     if (image.src.match("assets/flowers_1.jpg")) {
         image.src = "assets/flowers_2.jpg";
     } else {
         image.src = "assets/flowers_1.jpg";
     }
 }

 function newImage2() {
      var image = document.getElementById('myImage2');
      if (image.src.match("assets/cusco_mountains_2.jpg")) {
          image.src = "assets/cusco_mountains_1.jpg";
      } else {
          image.src = "assets/cusco_mountains_2.jpg";
      }
  }

  function newImage3() {
       var image = document.getElementById('myImage3');
       if (image.src.match("assets/serving_coffee.jpg")) {
           image.src = "assets/coffee_1.jpg";
       } else {
           image.src = "assets/serving_coffee.jpg";
       }
   }

   function newImage4() {
        var image = document.getElementById('myImage4');
        if (image.src.match("assets/beach_chair.jpg")) {
            image.src = "assets/cancun_sea.jpg";
        } else {
            image.src = "assets/beach_chair.jpg";
        }
    }
