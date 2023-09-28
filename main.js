//DAY AND NIGHT

$("#toggle-btn").click(function () {
      //change background color
      $("body").toggleClass("change-background"); /* Chama a classe e muda sempre que clico nela "toggle" */  
      $(this).css("border", "4px solid white");
      $("#jQuery").toggleClass("change-background2");
       

        
      
      //toggle button text
      $(".time").text(
        $(".time").text() == "Day" ? "Night" : "Day"
      );
    });
    $("#toggle-btn").click(function () {
      $(this).find("i").toggleClass("fa-moon fa-sun");
    });



    //Hover
  
    $(".HTML, .CSS, .JavaScript, .Sass, .Bootstrap").hover(function(){
      $(this).css("color", "grey");
      }, function(){
      $(this).css("color", "inherit");
    });

/* ARRANJAR HOVER DO jQuery 
    $("#jQuery").hover(function(){
      $(this).css("filter", "opacity(0.5)");
      }, function(){
      $(this).css("filter", "opacity(1)");
      
    }); */