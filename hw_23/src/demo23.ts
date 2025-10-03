import {
  runSequentialTasks,
  processStringsUppercaseParallel,
  parallelWithErrorHandling,
  waitNumbersAsDelays
} from "./homework23.js";

(async () => {
  //Задание 1
  const seq = await runSequentialTasks();
  console.log("Z1 sequential:", seq); // ["step-1 done","step-2 done","step-3 done"]

  //Задание 2
  const up = await processStringsUppercaseParallel(["ts", "node", "async"]);
  console.log("Z2 uppercase parallel:", up); // ["TS","NODE","ASYNC"]

  //Задание 3
  const res = await parallelWithErrorHandling();
  console.log("Z3 parallel error:", res); // "Caught error: P2 FAIL"

  //Задание 4
  const done = await waitNumbersAsDelays([300, 100, 200]);
  console.log("Z4 wait numbers:", done); // [300,100,200] 
})();
