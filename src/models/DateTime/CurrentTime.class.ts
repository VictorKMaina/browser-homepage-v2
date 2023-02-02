import { DateTimeValues, Period } from "@/models/DateTime/datetime.type";
import { padDateTime } from "@/helpers/helpers";

export default class CurrentTime {
  private periods: readonly Period[] = [
    "morning",
    "noon",
    "afternoon",
    "evening",
    "night",
  ];

  get period(): Period {
    if (this.hours.number >= 5 && this.hours.number < 12) return "morning";
    if (this.hours.number === 12) return "noon";
    if (
      this.hours.number >= 12 &&
      this.minutes.number > 0 &&
      this.hours.number < 5
    ) {
      return "afternoon";
    }
    if (this.hours.number >= 5 && this.hours.number < 8) return "evening";
    else return "night";
  }

  get hours(): DateTimeValues {
    const hoursNum = new Date().getHours();
    let hoursFormatted = hoursNum > 12 ? hoursNum - 12 : hoursNum;

    return {
      string: padDateTime(hoursFormatted),
      number: hoursNum,
    };
  }

  get minutes(): DateTimeValues {
    const minutesNum = new Date().getMinutes();

    return {
      string: padDateTime(minutesNum),
      number: minutesNum,
    };
  }

  get seconds(): DateTimeValues {
    const secondsNum = new Date().getSeconds();

    return {
      string: padDateTime(secondsNum),
      number: secondsNum,
    };
  }

  get meridiem(): string {
    return this.hours.number >= 12 ? "PM" : "AM";
  }
}
