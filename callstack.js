///Scenario 1: Basic setTimeout

// console.log('First');

// setTimeout(() => {
//   console.log('Second');
// }, 0);

// console.log('Third');
// i think it will be first, third, second
// out put was right as we learned this in class and showcased to us 



////Scenario 2: Nested setTimeout

// setTimeout(() => {
//   console.log('First');
//   setTimeout(() => {
//     console.log('Second');
//   }, 0);
// }, 0);

// console.log('Third');
// since first and second are in the time out it will comeafter. and second will be last
// was correct third was first and then first was second  and second was last. this is because the second was called in the timeout withn another timeout

/////Scenario 3: Long running operation
// function longOperation() {
//   for (let i = 0; i < 1000000000; i++) {
//     // Some heavy computation
//   }
//   return 'Operation complete';
// }

// console.log('Start');

// setTimeout(() => {
//   console.log(longOperation());
// }, 0);

// console.log('End');

// i think the long operation will finish first and then the end will be called after the for loop is done.
// it called end before operation complete and i realie its because the operationcomplete is within a settimeout function 


////Scenario 4: Multiple setTimeout with Different Delays

// console.log("Start");

// setTimeout(() => {
//   console.log("A");
// }, 3000);

// setTimeout(() => {
//   console.log("B");
// }, 1000);

// setTimeout(() => {
//   console.log("C");
// }, 2000);

// console.log("End");
// i think itll be start,end and then  B,c,a due to the timeout times

///Scenario 5: Changing the Timeout Delay Dynamically

// console.log("Start");

// let delay = 2000;
// setTimeout(() => {
//   console.log("Hello");
//   delay = 1000;
// }, delay);

// setTimeout(() => {
//   console.log("World");
// }, delay);

// console.log("End");

// i think end will be first and then hello will come and then world
/// bonus


// console.log('First');

// Promise.resolve().then(() => console.log('Second'));

// setTimeout(() => console.log('Third'), 0);

// console.log('Fourth');