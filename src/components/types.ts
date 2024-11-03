// IMPORTANT
// IMPORTANT
// IMPORTANT
//  eventType and importanceLevel has reladed CSS so if any word changes here then it should be changed in the CSS file as well
// IMPORTANT
// IMPORTANT
export enum eventType {
  Study = "Study",
  Appointment = "Appointment",
  Meetup = "Meetup",
  Library = "Library",
  Gym = "Gym",
  Other = "Other",
  Shopping = "Shopping",
}
export enum importanceLevel {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export type EventItem = {
  start?: Date;
  end?: Date;
  data?: { name?: String; type?: eventType };
  importance?: importanceLevel;
};
