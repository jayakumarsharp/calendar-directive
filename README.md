# calendar-directive

This calendar has fairly simple usage, but a good deal of logic is going on under the hood. The app allows users to view calendar pages by the month as many as 20 years in the past or future. Data binding to the view updates the title with the currently selected month and year, and ng-class is used to dynamically display a different background image based on the season the selected month falls under. An ng-if attribute conditionally displays a different rhetorical question based on whether the month being viewed is in the past or future. Also, a bit of Bootstrap is used to create some built in styling and responsiveness for a project mainly focused on demonstrating Angular functionality.

The app uses two separate custom directives. One is restricted to usage as an element and displays the calendar app inside the index page and the other is the date selection table which is restricted to usage as an attribute and is called inside the template for the calendar directive.
                
