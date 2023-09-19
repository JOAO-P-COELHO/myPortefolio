$("#toggle-btn").click(function () {
      //change background color
      $("body").toggleClass("change-background"); /* Chama a classe e muda sempre que clico nela "toggle" */  
        $(this).css("border", "4px solid white");
        
      
      //toggle button text
      $(".time").text(
        $(".time").text() == "Day" ? "Night" : "Day"
      );
    });
    $("#toggle-btn").click(function () {
      $(this).find("i").toggleClass("fa-moon fa-sun");
    });
  