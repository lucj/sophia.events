/*
 Read events.json and move past events into past_events.json
 */

const fs = require("fs");
      lo = require("lodash");

// Get today's date
var date = new Date().toISOString().replace(/[:\-]/g, '').replace(/\..+/, '')

// Get whole list of events
var events_contents = fs.readFileSync("events.json");
var events = JSON.parse(events_contents);

// Define lists of upcoming and past events
var upcoming_events = [];
var past_events = [];

// Move events in dedicated list
events.events.forEach(function(event){
  // Check if event already happened
  if(event.ts >= date){
    // Add event in list of upcoming events
    upcoming_events.push(event);
  } else {
    // Add event in list of past events
    past_events.push(event);
  }
});

// Sort upcoming events in date ascending order
var upcoming = { "events" : lo.orderBy(upcoming_events, ["id"], ["asc"]) };

// Sort past events reverse in date descending order
var past = { "events" : lo.orderBy(past_events, ["id"], ["desc"]) };

// Persist list in corresponding files
fs.writeFileSync('upcoming_events.json', JSON.stringify(upcoming));
fs.writeFileSync('past_events.json', JSON.stringify(past));
