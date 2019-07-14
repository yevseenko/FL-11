function formatTime(minutes) {
  const d = Math.floor(minutes/1440);
  const h = Math.floor(minutes%1440/60);
  const m = minutes%60;
  return `${d} day(s) ${h} hour(s) ${m} minute(s).`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
