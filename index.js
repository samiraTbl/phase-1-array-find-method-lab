// code your solution here
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
console.log(record.result);

function superbowlWin(arr) {
    const winningEntry = arr.find(entry => entry.result === 'W');
    if (winningEntry) {
      return winningEntry.year;
    }
    return undefined;
  }
  
  console.log(superbowlWin(record));