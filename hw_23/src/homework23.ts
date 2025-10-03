const delay = (ms: number, value?: unknown, shouldReject = false) =>
  new Promise<unknown>((resolve, reject) =>
    setTimeout(() => (shouldReject ? reject(value) : resolve(value)), ms)
  );

//Задание 1
 
export async function runSequentialTasks(): Promise<string[]> {
  const results: string[] = [];
  const r1 = (await delay(400, "step-1 done")) as string;
  results.push(r1);

  const r2 = (await delay(300, "step-2 done")) as string;
  results.push(r2);

  const r3 = (await delay(200, "step-3 done")) as string;
  results.push(r3);

  return results;
}

// Задание 2
export async function processStringsUppercaseParallel(items: string[]): Promise<string[]> {
  const tasks = items.map((s, i) =>
    delay(150 + i * 50).then(() => s.toUpperCase()) 
  );
  return Promise.all(tasks as Promise<string>[]);
}

//Задание 3
export async function parallelWithErrorHandling(): Promise<string> {
  const p1 = delay(200, "P1 OK").then(String);
  const p2 = delay(300, "P2 FAIL", true).then(String);
  const p3 = delay(100, "P3 OK").then(String);

  try {
    await Promise.all([p1, p2, p3]);
    return "All succeeded"; 
  } catch (err) {
    return `Caught error: ${String(err)}`;
  }
}

// Задание 4
export async function waitNumbersAsDelays(values: number[]): Promise<number[]> {
  const tasks = values.map((ms) =>
    delay(ms).then(() => ms) 
  );
  return Promise.all(tasks as Promise<number>[]);
}
