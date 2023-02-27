import { useSignal, createSignal, loadSignal } from "@zpaceway/react-signals";

/**
 * The value of counterSignal would be something similar to:
 *
 * {
 *   name: "2e825f67-878e-445b-bff6-429196cb2d1d",
 *   context: "default",
 *   initialValue: 0,
 * }
 *
 */
export const counterSignal = createSignal({
  initialValue: 0,
});

/**
 * You can set the state of your signal from outside
 * of the component using loadSignal
 */
const {
  signal$: count$,
  setState: setCount,
  reset: resetCounters,
} = loadSignal(counterSignal);
setCount(100);

/**
 * You can also get the value of your signal from outside of the
 * component by using the signal$.getValue() function
 */
console.log(
  `This value is loaded from outside of a component ${count$.getValue()}`
);

const Counter1 = () => {
  const { state: count, setState: setCount } = useSignal(counterSignal);

  return (
    <div style={{ margin: "20px 0" }}>
      <div>
        I'm the counter1 component with value:
        <br />
        {count}
      </div>
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
      <div>
        I'm a counter2 component with value:
        <br />
        {count}
      </div>
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
      <div>
        I'm the counter3 but my value does not update automatically, please
        click on detect changes to update my value:
        <br />
        {count}
      </div>
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
