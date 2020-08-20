$("button").click(function() {
  let id = $(this).data("place");
  var curr = $(`#${id}`).css("display", "block");
  console.log(curr.siblings()[0])
  

  
 

});
// $("button").click(function() {
//   let id = $(this).data("place");
//   if (`#${id}`).css("display", "block") {
//     return `#${id}`.css("display") == "none";
//   }
// });
