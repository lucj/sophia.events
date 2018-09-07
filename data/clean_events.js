const fs = require("fs");
      lo = require("lodash");

// Get whole list of events
var events_contents = fs.readFileSync("events.json");
var events = JSON.parse(events_contents);


/*
-// Define lists of upcoming and past events
-var upcoming_events = [];
-var past_events = [];
-
-// Move events in dedicated list
-events.events.forEach(function(event){
-  // Check if event already happened
-  if(event.ts >= date){
-    // Add event in list of upcoming events
-    upcoming_events.push(event);
-  } else {
-    // Add event in list of past events
-    past_events.push(event);
-  }
-});
-
-// Sort upcoming events in date ascending order
-var upcoming = { "events" : lo.orderBy(upcoming_events, ["ts"], ["asc"]) };
*/

// Sort events by date in descending order
var ordered = { "events" : lo.orderBy(events.events, ["ts"], ["desc"]) };

// Persist list in corresponding files
fs.writeFileSync('events.json', JSON.stringify(ordered));
