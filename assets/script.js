// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the HTML.
$(function () {
    // Function to update time-block classes based on current time
    function updateTimeBlocks() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    // TODO: Add a listener for click events on the save button.
    $(".saveBtn").on("click", function () {
      var blockId = $(this).closest(".time-block").attr("id");
      var userInput = $(this).siblings(".description").val();
  
      // TODO: Save user input in local storage using the blockId as a key.
      localStorage.setItem(blockId, userInput);
    });
  
    // TODO: Display the current date in the header
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  
    // TODO: Set the values of the corresponding textarea elements from local storage.
    $(".time-block").each(function () {
      var blockId = $(this).attr("id");
      var storedInput = localStorage.getItem(blockId);
  
      if (storedInput) {
        $(this).find(".description").val(storedInput);
      }
    });
  
    // TODO: Call updateTimeBlocks to initially set the time-block classes.
    updateTimeBlocks();
  
    // TODO: Add an interval to call updateTimeBlocks every hour to keep the classes updated.
    setInterval(updateTimeBlocks, 60 * 60 * 1000);
  });
  