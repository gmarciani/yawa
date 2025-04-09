import log from "loglevel";

// Add a custom prefix (timestamp + function name)
log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = (console as any)[methodName] || console.log;

  return function (...args: any[]) {
    const timestamp = new Date().toISOString();
    const fn = getCallerFunctionName();
    rawMethod(`[${timestamp}] [${methodName.toUpperCase()}] [${fn}]`, ...args);
  };
};

log.setLevel(log.levels.INFO, true); // `true` forces update

function getCallerFunctionName(): string {
  const err = new Error();
  const stack = err.stack?.split("\n");
  const line = stack?.[3]?.trim();
  const match = line?.match(/at (\S+)/);
  return match?.[1] || "anonymous";
}

export default log;
