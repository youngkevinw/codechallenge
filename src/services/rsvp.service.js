"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsvpService = void 0;
var RsvpService = /** @class */ (function () {
    //initialize array of rsvpforms
    function RsvpService(logger, initialEntries) {
        if (initialEntries === void 0) { initialEntries = []; }
        this.logger = logger;
        this.rsvpEntries = new Map(initialEntries.map(function (entry) { return [entry.playerId, entry]; }));
    }
    //add or update the rsvp form, dont use name, id is unique
    //check if status is valid, if not, log error and return
    RsvpService.prototype.addOrUpdateRSVP = function (player, status) {
        if (!this.isValidStatus(status)) {
            this.logger.error("Invalid RSVP status: ".concat(status));
            return;
        }
        var response = { playerId: player.id, status: status };
        this.rsvpEntries.set(player.id, response);
        this.logger.log("Updated RSVP for ".concat(player.name, ": ").concat(status));
    };
    //get everyone who said yes
    RsvpService.prototype.getConfirmedAttendees = function (players) {
        var _this = this;
        return players.filter(function (player) { var _a; return ((_a = _this.rsvpEntries.get(player.id)) === null || _a === void 0 ? void 0 : _a.status) === 'Yes'; });
    };
    //get all counts of responses, except maybe, put all entries in form of array
    RsvpService.prototype.getResponseCounts = function () {
        var allResponses = Array.from(this.rsvpEntries.values());
        return {
            Yes: allResponses.filter(function (entry) { return entry.status === 'Yes'; }).length,
            No: allResponses.filter(function (entry) { return entry.status === 'No'; }).length,
            Total: allResponses.length,
        };
    };
    //helper function, logs messages, check if the status is valid, if not, log and return error
    RsvpService.prototype.isValidStatus = function (status) {
        return ['Yes', 'No', 'Maybe'].includes(status);
    };
    return RsvpService;
}());
exports.RsvpService = RsvpService;
