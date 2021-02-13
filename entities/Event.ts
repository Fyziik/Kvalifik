import { User } from "./User";
import { Status } from "./Status";
import { Location } from "./Location";
import { Organisation } from "./Organisation";

export class Event {
    id;
    startDate: Date;
    endDate: Date;
    startTime: String;
    endTime: String;
    description: String;
    eventScheduleTime?: String;
    eventScheduleDescription?: String;
    photo: String;
    location?: Location;
    pinned: boolean;
    responsible?: User;
    collaboration: Organisation[];
    status: Status;
}