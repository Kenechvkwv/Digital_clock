let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let time = `${hrs}:${mins}:${secs}`;
  // log the time in console
  console.log(time);
};
// call the clock function
clock();
