import { useSignal, createSignal } from "@zpaceway/react-signals";

/**
  The value of counterSignal would be something similar to:

  {
    name: "2e825f67-878e-445b-bff6-429196cb2d1d",
    context: "default",
    initialValue: 0,
  }

 */
export const counterSignal = createSignal({
  initialValue: 0,
});

const Counter1 = () => {
  const { state: count, setState: setCount } = useSignal(counterSignal);

  return (
    <div style={{ margin: "20px 0" }}>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

const Counter2 = () => {
  const { state: count, setState: setCount } = useSignal(counterSignal);

  return (
    <div style={{ margin: "20px 0" }}>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

const Counter3 = () => {
  const { state: count, detectChanges: detectCounterChanges } = useSignal(
    counterSignal,
    { subscribe: false }
  );

  return (
    <div style={{ margin: "20px 0" }}>
      <div>{count}</div>
      <div>
        <button onClick={detectCounterChanges}>Detect counter changes</button>
      </div>
    </div>
  );
};

const ResetCounter = () => {
  const { reset: resetCounters } = useSignal(counterSignal, {
    subscribe: false,
  });

  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={resetCounters}>reset counters</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <ResetCounter />
    </div>
  );
};

export default App;
