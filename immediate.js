// this very poorly name method, setImmediate(), 

// runs first
console.log('step 1')

// gets put into the async queue
setTimeout(function(){
  console.log('step 2')
}, 0)

// waits until AFTER the async queue is empty, then runs
setImmediate(function(){
  console.log('step 2*')
})

// runs second
console.log('step 1.5?')
