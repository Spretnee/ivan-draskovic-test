export type Controls = {
  play: () => Promise<void>;
  pause: () => Promise<void>;
  jumpForward30: () => Promise<void>;
  jumpBack15: () => Promise<void>;
  onSlidingComplete: (value: Array<number>) => Promise<void>;
  reset: () => Promise<number | void>;
  next: () => Promise<void>;
  previous: () => Promise<void>;
  skip: (id: number) => Promise<void>;
};