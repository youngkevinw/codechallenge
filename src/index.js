"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rsvp_service_1 = require("./services/rsvp.service");
var logger_1 = require("./utils/logger");
var Players = [
    { id: '1', name: 'Adam' },
    { id: '2', name: 'Billy' },
    { id: '3', name: 'Charlie' },
];
var logger = new logger_1.ConsoleLogger();
var rsvpService = new rsvp_service_1.RsvpService(logger);
// Add or update RSVP for players
rsvpService.addOrUpdateRSVP(Players[0], 'Yes'); // Adam says Yes
rsvpService.addOrUpdateRSVP(Players[1], 'No'); // Billy says No
rsvpService.addOrUpdateRSVP(Players[2], 'Yes'); // Charlie says Maybe
// rsvpService.addOrUpdateRSVP(Players[0], 'Maybe'); // Adam changes to Maybe
//get results
console.log('All Attendees:', rsvpService.getConfirmedAttendees(Players));
console.log('RSVP Counts:', rsvpService.getResponseCounts());
