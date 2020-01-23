$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newdevour = $(this).attr("data-devour");
      console.log(newdevour)
  
      var newDevourState = {
        devoured: newdevour
      };
      console.log(newDevourState)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newdevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerTxt").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("api/burgers",{
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });  
});
  