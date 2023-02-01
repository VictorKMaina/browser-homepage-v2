import { DateInterface, TimeInterface } from "@/interfaces/datetime.interface";

export function getCurrentTime(): TimeInterface {
  const datetime = new Date();
  const hours = datetime.getHours();

  let hoursStr = `${hours > 12 ? hours - 12 : hours}`;
  let minutesStr = datetime.getMinutes().toString();

  // Add zero prefix if only one digit
  hoursStr = hoursStr.length === 1 ? `0${hoursStr}` : hoursStr;
  minutesStr = minutesStr.length === 1 ? `0${minutesStr}` : minutesStr;

  return {
    hours: hoursStr,
    minutes: minutesStr,
    meridiem: hours >= 12 ? "PM" : "AM",
  };
}

export function getCurrentDate(): DateInterface {
  const datetime = new Date();

  let date = datetime.getDate().toString();

  // Add zero prefix if only one digit
  date = date.length === 1 ? `0${date}` : date;

  const day = weekdays[datetime.getDay()];
  const month = months[datetime.getMonth()];
  const year = datetime.getFullYear();

  return { day, date, month, year };
}

export function formatTime(time: TimeInterface): string {
  return ``;
}

export const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
] as const;

export const weekdaysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export const monthsFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
