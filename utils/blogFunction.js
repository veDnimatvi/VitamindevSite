export function getNumFromDateString(date) {
  let dateNums = date.split(" ");
  let month = dateNums[1];
  let nMonth = 0;
  switch (month) {
    case "January":
      nMonth = 1;
      break;
    case "Febuary":
      nMonth = 2;
      break;
    case "March":
      nMonth = 3;
      break;
    case "April":
      nMonth = 4;
      break;
    case "May":
      nMonth = 5;
      break;
    case "June":
      nMonth = 6;
      break;
    case "July":
      nMonth = 7;
      break;
    case "August":
      nMonth = 8;
      break;
    case "September":
      nMonth = 9;
      break;
    case "October":
      nMonth = 10;
      break;
    case "November":
      nMonth = 11;
      break;
    case "December":
      nMonth = 12;
      break;
    default:
      throw Error("Invalid Date");
  }
  return Number(dateNums[2] + nMonth + dateNums[0]);
}
