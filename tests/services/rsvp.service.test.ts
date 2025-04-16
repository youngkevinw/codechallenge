import { RsvpService } from "../../src/services/rsvp.service";
import { LoggerMock } from "../mocks/logger.mock";
import { RsvpStatus } from "../../src/models/rsvpForm";
import { Player } from "../../src/models/player";

describe('RsvpService', () => {
    let rsvpService: RsvpService;
    let loggerMock: LoggerMock;
    const testPlayer: Player = { id: '1', name: 'May' };

    beforeEach(() => {
        loggerMock = new LoggerMock();
        rsvpService = new RsvpService(loggerMock);
    });
    
    describe('Add or Update RSVP', () => {
        it('should add a new RSVP', () => {
            rsvpService.addOrUpdateRSVP(testPlayer, 'Yes');
            
            const attendees = rsvpService.getConfirmedAttendees([testPlayer]);
            expect(attendees).toEqual([testPlayer]);

            expect(loggerMock.logs).toContain(`Updated RSVP for ${testPlayer.name}: Yes`);
        });

        it('should update an existing RSVP', () => {
            rsvpService.addOrUpdateRSVP(testPlayer, 'Yes');
            rsvpService.addOrUpdateRSVP(testPlayer, 'No');
            
            const response  = rsvpService.getResponseCounts();
            expect(response.No).toEqual(1);
        });

        it('logs an error for invalid status', () => {
            const invalidStatus = 'InvalidStatus' as RsvpStatus; // bypass type checking
            rsvpService.addOrUpdateRSVP(testPlayer, invalidStatus);
            expect(loggerMock.errors).toContain(`Invalid RSVP status: ${invalidStatus}`);
        });
    });

    describe('getAllAttendees', () => {
        it('should count responses correctly', () => {
            const players = [
                { id: '1', name: 'Adam' },
                { id: '2', name: 'Billy' },
                { id: '3', name: 'Charlie' }
            ];
            rsvpService.addOrUpdateRSVP(players[0], 'Yes');
            rsvpService.addOrUpdateRSVP(players[1], 'No');
            rsvpService.addOrUpdateRSVP(players[2], 'Maybe');

            const response = rsvpService.getResponseCounts();
            expect(response).toEqual({
                Yes: 1,
                No: 1,
                Total: 3,
            });
        });
    });
});