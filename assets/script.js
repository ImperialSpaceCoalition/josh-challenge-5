
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the HTML.
// Ensure all code interacting with the DOM runs after the HTML is rendered
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

    // Generate time blocks for the entire day
    for (var i = 0; i < 24; i++) {
        var formattedHour = dayjs().hour(i).format("ha").toUpperCase();
        var timeBlockHTML = `
            <div id="hour-${i}" class="row time-block">
                <div class="col-2 col-md-1 hour text-center py-3">${formattedHour}</div>
                <textarea class="col-8 col-md-10 description" rows="3"></textarea>
                <button class="btn saveBtn col-2 col-md-1" aria-label="save">
                    <i class="fas fa-save" aria-hidden="true"></i>
                </button>
            </div>
        `;
        $(".container-fluid").append(timeBlockHTML);
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
