import { Period } from "@/models/DateTime/datetime.type";

export function formatGreeting(period: Period) {
  if (period === "noon") return "It's noon";
  else return `Good ${period}`;
}
