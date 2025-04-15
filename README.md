# RSVP Service

A microservice written in typescript for managing RSVP responses from Players. Contains jest test files for testing.

## Features
#### Add or update RSVP responses using player IDs.

#### Validate RSVP status (Yes, No, or Maybe).

#### Retrieve a list of confirmed attendees (said Yes).

#### Generate summary counts of all RSVP responses.

#### Built-in logging of events and errors.

## Methods
### addOrUpdateRSVP
Adds or updates an RSVP form entry using the player's unique ID. Validates the status before saving. If an invalid status is provided, it logs an error.

### getConfirmedAttendees
Returns an array of players who have responded with "Yes".

### getResponseCounts
Returns a count of each RSVP status, and total for all counts of RSVP.

### private isValidStatus
Checks whether the provided status is one of the allowed types (Yes, No, or Maybe).

## Notes
#### RSVP status is expected to be one of: 'Yes' | 'No' | 'Maybe'.

#### Duplicate entries (by player ID) will be updated, not duplicated.

#### Invalid statuses will only be logged.
