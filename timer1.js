// -----------------------   TIMER 1   -------------------------------------- //


/** Implement timer/alarm function intakes a series of times from the user that
 *    determine the number & timing (delay) function returns a beep
 * - INPUT - inputtedTimes specified by user's input via CLI when running app 
 * - OUTPUT - function returns series of beeps (# of beep = # of inputted times)
 *    with the occurrence of each beep delay equal to inputtedTimes
 * - ADDITIONAL CONDITIONS - no limit to number of inputtedTimes (0 to infinite)
 *                         - ignore non-numbers & any negative numbers
 */
const inputtedTimes = process.argv.slice(2);
  const timer = (inputtedTimes) => {
  let delay = 0;
    if (inputtedTimes) {
    /**loops through all inputtedTimes & if positive, time used as delay */
      for (let time of inputtedTimes) { 
      if (time > 0) { 
        delay += time * 1000;
        setTimeout(() => {
          process.stdout.write('\x07');
        }, delay);
      }
    }
  }
};
timer(inputtedTimes);
