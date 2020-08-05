HTML
Used a Header class of Jumbotron (Used Bootstrap)
In the Div class Container Created a ROW and COL for all the hourly blocks (using military time for DIV ID declaration but “text” as normal time ie 17 hours is 5 pm).
Used button class for the SAVE button for every hour.

JS
Starting from “Document. Ready function”
Jquery used for ->  .saveBtn and .on.CLICK event
Jquery – “this” is used for the click to save the “Value” and “Time” in a variable. Used in conjunction with .siblings and .parents to get “nearby values”

Local storage – Storing time and value using “setItem”

Get current number of hours by utilizing moment().hours() and declaring it in a variable.
Jquery for Looping over time blocks -> used (.time-block).each function with utilizing .this
Jquery for .this to check to see if the time is in the past. Add class “past” (the styling for this was given to us in the css.
Used if , else if and else to see if time is in the past or current or future. Add and remove class appropriately based on the current time.

![Capture time screenshot](Capture.png)