import { RsvpForm, RsvpStatus } from "../models/rsvpForm";
import { Player } from "../models/player";
import { Logger } from "../utils/logger";

export class RsvpService {
    //declare type of entries
    private rsvpEntries: Map<Player['id'], RsvpForm>; //map to look up by player id
    
    //initialize array of rsvpforms
    constructor(
        private readonly logger: Logger,
        initialEntries: RsvpForm[] = []
        ){
        this.rsvpEntries = new Map(initialEntries.map(entry => [entry.playerId, entry]));
    }

    //add or update the rsvp form, dont use name, id is unique
    addOrUpdateRSVP(player: Player, status: RsvpStatus): void {
        if (!this.isValidStatus(status)) {
            this.logger.error(`Invalid RSVP status: ${status}`);    //check if status is valid, if not, log error and return
            return;
        }

        const response: RsvpForm = { playerId: player.id, status };
        this.rsvpEntries.set(player.id, response);
        this.logger.log(`Updated RSVP for ${player.name}: ${status}`);
    }

    //get everyone who said yes
    getConfirmedAttendees(players: Player[]): Player[] {
        return players.filter(player => 
            this.rsvpEntries.get(player.id)?.status === 'Yes'
        );
    }

    //get all counts of responses, except maybe, put all entries in form of array
    getResponseCounts() {
        const allResponses = Array.from(this.rsvpEntries.values());
        return allResponses.reduce((counts, entry) => {
            if (entry.status === 'Yes') {
                counts.Yes++;
                }
            if (entry.status === 'No') {
                counts.No++;
                }
            counts.Total++;
            return counts;
        }, { Yes: 0, No: 0, Total: 0 });
    }

    //helper function, logs messages, check if the status is valid
    private isValidStatus(status: string): status is RsvpStatus {
        return ['Yes', 'No', 'Maybe'].includes(status);
    }
}