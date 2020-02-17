let input = $("input");
let dish = $(":checked");
let span = $("span");

input.change(function(e) {
  let connector = ", ";
  if (span.text() == "...") {
    span.text(" ");
    connector = "";
  }
  span.text(span.text() + connector + e.target.value.replace("-", " "));
  console.log(span.length);
});
