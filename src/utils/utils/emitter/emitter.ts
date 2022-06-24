
export enum Events {
  SHOW = "show",
  HIDE = "hide",
  HIDE_ALL = "hideAll",
}
export type Handler<T = any> = (event: T) => void

interface Emitter {
  on<T = any>(event: Events, handler: Handler<T>): void

  emit<T = any>(event: Events, args?: T): void

  off(): void
}

export const emitter = ((): Emitter => {
  const events = new Map();

  return {
    on<T = any>(event: Events, callback: Handler<T>) {
      if (!events.has(event)) events.set(event, []);
      events.get(event).push(callback);
    },

    emit<T = any>(event: Events, args: T) {
      if (!events.has(event)) return;
      events.get(event).forEach((callback: Handler) => callback(args));
    },

    off() {
      events.clear();
    },
  };
})();