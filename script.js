$(document).ready(function () {

  //Hover
  // $("#p2").hover(function(){
  //   $('#p1').hide();
  // },
  // function(){
  //   $('#p1').show();
  // });

  //.ON
  // $("#p1").on({
  //   mouseenter: function() {
  //     $('#p2').hide(1000);
  //   },
  //   mouseleave: function() {
  //     $('#p2').show();
  //   }
  // });

  //EFFET CASCADE
  // $('#p1').hover(function(){
  //     $('#p2').hide(1000, function(){
  //       $('#p3').hide(2000);
  //     });
  //   });

  //ANIMATION1
  // $("#start").click(function() {
  //   $("div").animate({
  //     left: '600px',
  //     opacity: 0.5,
  //     width: '200px'
  //   }, 3000, function () {
  //     $("div").hide(2000);
  //   });
  // });

  // $("#stop").click(function(){
  //   $("div").stop(true);
  // });

  //ANIMATION2
  // $("#start").click(function(){
  //   $("div").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
  // });

  //RECUPERER HTML
  // $("#start").click(function(){
  //   let cons = $("#test1").html();
  //   console.log(cons);
  // })

  //RECUPERER VALEUR INPUT
  // $("#start").click(function(){
  //   let cons = $("input").val();
  //   console.log(cons);
  // })

  //RECUPERER ATTRIBUT
  // $("#start").click(function(){
  //     let cons = $("#test1").attr("style");
  //     console.log(cons);
  //   })

  //CHANGER CONTENU TEST1
  // $("#start").click(function () {
  //   $("#test1").text("Changé!");
  //   $("#test2").html("Changé avec <b>du gras</b>");
  //   $("input").val("Nouvelle valeur");
  //   $("div").append("<p>New p à la fin de la div</p>");
  //   $("div").prepend("<p>Nouvelle valeur au début de la <b>div</b>");
  //   $("div").after("<p>Nouvelle valeur après <b>div</b>");
  //   $("div").before("<p>Nouvelle valeur avant <b>div</b>");
  //   $("#test1").remove();
  // })

  //CSS ET JQUERY
  // $("#start").click(function () {
  //   $("#p1, #p2").addClass("red bold");
  // });
  // $("#toggle").click(function () {
  //   $("#p1, #p2").toggleClass("red bold");
  // });
  // $("#css").click(function () {
  //   $("#p1").css({ "color": "yellow", "font-weight": "bold" });
  //   console.log($("#p1").css("color"));
  // });

  //ARBORESCNCE PARENT ENFANT
  // $("#start").click(function() {
  //   $("#div1").parents(".special").css("border-color", "green");
  //   $("#div1").children().css("border-color", "green");
  //   $("#div1").find("p").css("border-color", "yellow");
  // });

  //ARBORESCENCE FRERES
  $("#start").click(function () {
    // $("#p1").siblings().css("border-color", "green");
    // $("#p1").next().css("border-color", "green");
    // $("p").first().css("border-color", "green");
    // $("p").last().css("border-color", "green");
    // $("p").eq(0).css("border-color", "green");
    // $("div").not("special").css("border-color", "green");
  });
});