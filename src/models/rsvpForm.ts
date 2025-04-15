import { Player } from "./player";

export type RsvpStatus = 'Yes' | 'No' | 'Maybe';

export interface RsvpForm {
  playerId: Player['id'];
  status: RsvpStatus;
}
