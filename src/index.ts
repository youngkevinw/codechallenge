import { RsvpService } from "./services/rsvp.service";
import { Player } from "./models/player";
import { ConsoleLogger } from "./utils/logger";

const Players: Player[] = [
    { id: '1', name: 'Adam' },
    { id: '2', name: 'Billy' },
    { id: '3', name: 'Charlie' },
]

const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger); 

// Add or update RSVP for players
rsvpService.addOrUpdateRSVP(Players[0], 'Yes'); // Adam says Yes
rsvpService.addOrUpdateRSVP(Players[1], 'No'); // Billy says No
rsvpService.addOrUpdateRSVP(Players[2], 'Maybe'); // Charlie says Maybe

rsvpService.addOrUpdateRSVP(Players[0], 'Maybe'); // Adam changes to Maybe

//get results
console.log('All Attendees:', rsvpService.getConfirmedAttendees(Players));
console.log('RSVP Counts:', rsvpService.getResponseCounts());