
const date = new Date("2024-12-11");
const [month, day, year] = [
  date.getMonth() +1,
  date.getDate(),
  date.getFullYear(),
];
// [11, 12, 2024] （月は 0 基点であるため）

console.log(year + '年' + month + '月' + day + '日');