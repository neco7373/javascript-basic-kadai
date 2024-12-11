
const today = new Date("2024-12-11");
const [month, day, year] = [
  today.getMonth() +1,
  today.getDate(),
  today.getFullYear(),
];
// [11, 12, 2024] （月は 0 基点であるため）

console.log(year + '年' + month + '月' + day + '日');