// let check = $(":checkbox");
// let dish = $(":checked");
// let span = $("span");
// var array = [];
// var array2 = array;
// const regex = /[-]/gi;
// let connector = ", ";
// check.change(function(e) {
  
//   if (span.text() == "...") {
//     span.text(" ");
//     connector = "";
//   }
 
// array.push(' ' + e.currentTarget.value);

// span.text(connector + array2.toString().replace(regex, " "));
// if (e.currentTarget.checked == false){ array.splice(input.index(this))};
 
  
//  console.log(array2.toString().replace(regex, " "));
// });

// const displayCheckedBoxes = (e) => {
//   if (e && e.currentTarget.value === 'deselect') {
//       $(':checked').prop('checked', false);
//   }
//   const selectedValues = [];

//   // with the jQuery each iterator
//   $(':checkbox:checked').each((key, inputElement) => {
//       selectedValues.push(inputElement.closest('label').innerText.trim().toLowerCase());
//   });

//   if (!selectedValues.length) {
//       $('h1 span').text('...');
//   } else if(selectedValues.length === 2) {
//       $('h1 span').text(selectedValues.join(' and '));
//   } else {
//       $('h1 span').text(selectedValues.join(', '));
//   }
// };

// // On initial load, if a checkbox is already selected, update the sentence
// displayCheckedBoxes();

// // Add event listener
// $(':checkbox').change(displayCheckedBoxes);

let check = $(":checkbox");
let dish = $(":checked");
let span = $("span");


const regex = /[-]/gi;
let connector = ", ";
$(":checkbox").change(function(e) {

  if (e && e.currentTarget.value === 'deselect') {
          $(':checked').prop('checked', false);}
          var array = [];
$(":checkbox:checked").each((key, value)=> {
  array.push(value.closest('label').innerText.trim().toLowerCase());
})
if(!array.length){$("span").text("...")
} else if (array.length === 2){array.join(" and ")
} else {array.join(", ")}
console.log(array)
if (span.text() === "..."){span.text(" ")}
span.text(array.toString());
console.log(check.content)
})