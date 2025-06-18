import { DateTime } from "luxon"

export default function (dateObj) {
  return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy")
}