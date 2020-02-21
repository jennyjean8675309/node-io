console.log('step 1')

setTimeout(function(){
  console.log('step 2')
}, 0)

// nextTick() is like an in-between async function - first, step 1 is logged, setTimeout gets put in the async queue to run later, step 1.5 is logged, AND THEN BEFORE OUR PROGRAM GOES BACK TO CALL THE SETTIMEOUT FUNCTION FROM THE ASYNC QUEUE NEXT TICK RUNS AND step 2* IS LOGGED TO THE CONSOLE, then we go to the async queue and setTimeout logs step 2
process.nextTick(function(){
  console.log('step 2*')
})

console.log('step 1.5?')
