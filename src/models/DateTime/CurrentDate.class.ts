import BaseCurrentDate from "./BaseCurrentDate.class";
import { DateLengthProperties, DateTimeValues } from "./datetime.type";
import { padDateTime } from "@/helpers/datetime";

export default class CurrentDate extends BaseCurrentDate {
  get date(): DateTimeValues {
    const dateNum = new Date().getDate();
    return {
      number: dateNum,
      string: padDateTime(dateNum),
    };
  }

  get day(): DateLengthProperties {
    const dayNum = new Date().getDay();
    return {
      short: this.weekdays[dayNum],
      long: this.weekdaysFull[dayNum],
    };
  }

  get month(): DateLengthProperties {
    const monthNum = new Date().getMonth();
    return {
      short: this.months[monthNum],
      long: this.monthsFull[monthNum],
    };
  }

  get year(): DateTimeValues {
    const yearNum = new Date().getFullYear();
    return {
      string: yearNum.toString(),
      number: yearNum,
    };
  }
}
