let descriptionChild = $("[name=description]");
let linkList = $(".link-list");
let title = $(".button").click(function() {
  var firstTitle = $("input:text").val();
  linkList.append(`Title: ${firstTitle}`);
  linkList.append(`Description: ${descriptionChild.val()}`);
});
