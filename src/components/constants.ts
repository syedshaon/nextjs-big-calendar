import moment from "moment";
import { Views } from "react-big-calendar";
import { EventItem } from "./types";
import { eventType } from "./types";
import { importanceLevel } from "./types";

export const VIEW_OPTIONS = [
  { id: Views.DAY, label: "Day View" },
  { id: Views.WEEK, label: "Week View" },
  { id: Views.MONTH, label: "Month View" },
];






 export const EVENTS: EventItem[] = [
  {
    start: moment("2024-10-30T10:00:00").toDate(),
    end: moment("2024-10-30T11:00:00").toDate(),
    data: {
      name: "Shopping",
      type: eventType.Shopping,
    },
    importance: importanceLevel.High,
  },
   {
    start: moment("2024-10-31T10:00:00").toDate(),
    end: moment("2024-10-31T11:00:00").toDate(),
    data: {
      name: "Shopping",
      type: eventType.Shopping,
    },
    importance: importanceLevel.High,
  },
   {
    start: moment("2024-11-02T10:00:00").toDate(),
    end: moment("2024-11-02T11:00:00").toDate(),
    data: {
      name: "Shopping",
      type: eventType.Shopping,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-03T10:00:00").toDate(),
    end: moment("2024-11-03T11:00:00").toDate(),
    data: {
      name: "Other",
      type: eventType.Other,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-04T10:00:00").toDate(),
    end: moment("2024-11-04T11:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },

   {
    start: moment("2024-11-05T10:00:00").toDate(),
    end: moment("2024-11-05T11:00:00").toDate(),
    data: {
      name: "Shopping",
      type: eventType.Shopping,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-06T10:00:00").toDate(),
    end: moment("2024-11-06T11:00:00").toDate(),
    data: {
      name: "Other",
      type: eventType.Other,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-07T10:00:00").toDate(),
    end: moment("2024-11-07T11:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },

  {
    start: moment("2024-11-08T10:00:00").toDate(),
    end: moment("2024-11-08T11:00:00").toDate(),
    data: {
      name: "Shopping",
      type: eventType.Shopping,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-09T10:00:00").toDate(),
    end: moment("2024-11-09T11:00:00").toDate(),
    data: {
      name: "Other",
      type: eventType.Other,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-10T10:00:00").toDate(),
    end: moment("2024-11-10T11:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-10T12:00:00").toDate(),
    end: moment("2024-11-10T13:00:00").toDate(),
    data: {
      name: "Library",
      type: eventType.Library,
    },
    importance: importanceLevel.Medium,
  },
  {
    start: moment("2024-11-11T12:00:00").toDate(),
    end: moment("2024-11-11T13:00:00").toDate(),
    data: {
      name: "Library",
      type: eventType.Library,
    },
    importance: importanceLevel.Low,
  },
  {
    start: moment("2024-11-12T14:00:00").toDate(),
    end: moment("2024-11-12T15:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-13T16:00:00").toDate(),
    end: moment("2024-11-13T17:00:00").toDate(),
    data: {
      name: "Meetup",
      type: eventType.Meetup,
    },
  },
  {
    start: moment("2024-11-13T09:00:00").toDate(),
    end: moment("2024-11-13T10:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
  },
  {
    start: moment("2024-11-13T11:00:00").toDate(),
    end: moment("2024-11-13T12:00:00").toDate(),
    data: {
      name: "Gym",
      type: eventType.Gym,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-13T15:00:00").toDate(),
    end: moment("2024-11-13T16:00:00").toDate(),
    data: {
      name: "Library",
      type: eventType.Library,
    },
     importance: importanceLevel.High,
  },
   {
    start: moment("2024-11-13T16:00:00").toDate(),
    end: moment("2024-11-13T17:00:00").toDate(),
    data: {
      name: "Library",
      type: eventType.Library,
    },
     importance: importanceLevel.High,
  },
   {
    start: moment("2024-11-13T17:00:00").toDate(),
    end: moment("2024-11-13T18:00:00").toDate(),
    data: {
      name: "Library",
      type: eventType.Library,
    },
     importance: importanceLevel.High,
  },

  {
    start: moment("2024-11-14T09:00:00").toDate(),
    end: moment("2024-11-14T10:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-15T17:00:00").toDate(),
    end: moment("2024-11-15T18:00:00").toDate(),
    data: {
      name: "Meetup",
      type: eventType.Meetup,
    },
     importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-16T11:00:00").toDate(),
    end: moment("2024-11-16T12:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-17T10:00:00").toDate(),
    end: moment("2024-11-17T11:00:00").toDate(),
    data: {
      name: "Meetup",
      type: eventType.Meetup,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-18T12:00:00").toDate(),
    end: moment("2024-11-18T13:00:00").toDate(),
    data: {
      name: "Study",
      type: eventType.Study,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-19T13:00:00").toDate(),
    end: moment("2024-11-19T14:00:00").toDate(),
    data: {
      name: "Meetup",
      type: eventType.Meetup,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-20T10:00:00").toDate(),
    end: moment("2024-11-20T11:00:00").toDate(),
    data: {
      name: "Gym",
      type: eventType.Gym,
    },
  },
  {
    start: moment("2024-11-21T15:00:00").toDate(),
    end: moment("2024-11-21T16:00:00").toDate(),
    data: {
      name: "Meetup",
      type: eventType.Meetup,
    },
  },
  {
    start: moment("2024-11-22T09:00:00").toDate(),
    end: moment("2024-11-22T10:00:00").toDate(),
    data: {
      name: "Appointment",
      type: eventType.Appointment,
    },
     importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-23T13:00:00").toDate(),
    end: moment("2024-11-23T14:00:00").toDate(),
    data: {
      name: "Gym",
      type: eventType.Gym,
    },
    importance: importanceLevel.High,
  },
  {
    start: moment("2024-11-24T09:00:00").toDate(),
    end: moment("2024-11-24T10:00:00").toDate(),
    data: {
      name: "Appointment",
      type: eventType.Appointment,
    },
    importance: importanceLevel.Low,
  },
  // more events with similar adjustments for times
];