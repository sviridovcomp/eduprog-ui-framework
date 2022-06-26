export enum Events {
  SHOW = "show",
  HIDE = "hide",
  HIDE_ALL = "hideAll",
}
// eslint-disable-next-line 
export type Handler<T = any> = (event: T) => void

interface Emitter {
  // eslint-disable-next-line 
  on<T = any>(event: Events, handler: Handler<T>): void

  // eslint-disable-next-line 
  emit<T = any>(event: Events, args?: T): void

  off(): void
}

export const emitter = ((): Emitter => {
  const events = new Map();

  return {
    // eslint-disable-next-line
    on<T = any>(event: Events, callback: Handler<T>) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(callback);
    },

    // eslint-disable-next-line
    emit<T = any>(event: Events, args: T) {
      if (!events.has(event)) return;
      events.get(event).forEach((callback: Handler) => callback(args));
    },

    off() {
      events.clear();
    },
  };
})();