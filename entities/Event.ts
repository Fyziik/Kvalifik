import { User } from "./User";

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

export enum Status {
    Draft,
    Published,
    Past
}

export class Location {
    id;
    name: String;
    roomNumber: number;
}

export class Organisation {
    id;
    name: String;
    description: String;
}