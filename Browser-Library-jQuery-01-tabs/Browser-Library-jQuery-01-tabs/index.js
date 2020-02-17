$("button").click(function() {
  let id = $(this).data("place");
  $(`#${id}`).css("display", "block");

  
  console.log(id);

});
// $("button").click(function() {
//   let id = $(this).data("place");
//   if (`#${id}`).css("display", "block") {
//     return `#${id}`.css("display") == "none";
//   }
// });
