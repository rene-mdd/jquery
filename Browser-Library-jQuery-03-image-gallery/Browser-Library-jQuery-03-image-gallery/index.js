// all images not visible, then remove class with visible and add
// class of visible with a fade in effect.

$(".gallery-item").hide();
// let li = $("li");
// let gallery = $(".gallery");
$(".gallery-item.active").show();
setInterval(function() {
  let current = $(".gallery-item.active");
  let nextItem = current.next();
  if (nextItem.length === 0) {
    nextItem = $(".gallery-item:first");
  }
  current.removeClass("active").fadeOut(1000);

  nextItem.addClass("active").fadeIn(1000);
}, 2000);

// console.log(images);
// images.hide();

// $(this).show(1000, function() {
//   console.log(images);
// });

// console.log(images);
