/*
Assignment for : ArgilDX
Submitted BY: Omprakash Kabira
Date: 07-05-2020

*/

window.onload = function(){

/*    ======= ANSWER 1 =============

    var counter = 1;
    var randomArray = [];
    let button = document.getElementById('abc');
    button.onclick = function(){
        var randomValue = Math.floor(Math.random() * (79 - 70 + 1) + 70);
        randomArray.push(randomValue);
        if (counter == 6) {
            button.style.display = 'none';
            console.log(randomArray);
        }
        counter++;
    }

    =================================*/

/*    ========= ANSWER 2 =================

    $.ajax({
        url: "demo.php",
        type: "POST",
        dataType: "json",
        data: {
            "action": "demo_action_name",
            "id": userid //if we have already stored the value in variable 'userid'
        },
        success: function(data){
            var values = data;
            var evenArray = [];
            values.forEach(function(item){
                if(item % 2 == 0) {
                   evenArray.push(item);
               }
           });

            if (evenArray.length > 0 ) {
                evenArray.forEach(function(even) {
                    console.log(even);
                })
            } else {
                console.log("There is no even number in the response");
            }
        },
        error: function(error){
           console.log("Error:"+ error);
       }
   });


   =====================================*/


   let mainNav = document.getElementById('js-menu');
   let navBarToggle = document.getElementById('js-navbar-toggle');

   function mobileMenu(self) {
      self.classList.toggle("change");
      mainNav.classList.toggle("active");
  }
}
