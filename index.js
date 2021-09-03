const isFunction = (value) => {
  return typeof value === "function";
};

const isPromise = (value) => {
  return isFunction(value?.then);
};

const tryPromise = async (promise) => {
  try {
    return [await promise];
  } catch (err) {
    return [undefined, err];
  }
};

const safely = (thingToTry) => {
  if (isPromise(thingToTry)) {
    return tryPromise(thingToTry);
  }
  if (isFunction(thingToTry)) {
    try {
      const result = thingToTry();
      if (isPromise(result)) {
        return tryPromise(result);
      }
      return [result];
    } catch (err) {
      return [undefined, err];
    }
  }
  return [thingToTry];
};

module.exports = safely;
