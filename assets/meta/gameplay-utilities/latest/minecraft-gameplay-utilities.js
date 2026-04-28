// lib/src/events/eventPromise.js
function nextEvent(signal, filter) {
  return new EventPromiseImpl(signal, filter);
}
var EventPromiseImpl = class {
  [Symbol.toStringTag] = "Promise";
  promise;
  onCancel;
  constructor(signal, filter) {
    this.promise = new Promise((resolve, _) => {
      if (signal === void 0 || signal.subscribe === void 0 || signal.unsubscribe === void 0) {
        resolve(void 0);
        return;
      }
      const sub = (event) => {
        this.onCancel = void 0;
        signal.unsubscribe(sub);
        resolve(event);
      };
      if (filter === void 0) {
        signal.subscribe(sub);
      } else {
        signal.subscribe(sub, filter);
      }
      this.onCancel = () => {
        signal.unsubscribe(sub);
        resolve(void 0);
      };
    });
  }
  cancel() {
    this.onCancel?.();
  }
  then(onfulfilled, onrejected) {
    return this.promise.then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.promise.catch(onrejected);
  }
  finally(onfinally) {
    return this.promise.finally(onfinally);
  }
};
export {
  nextEvent
};
//# sourceMappingURL=minecraft-gameplay-utilities.js.map
