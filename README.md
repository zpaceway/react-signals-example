# react-signals Example

This repo shows up how to use react-signals. It will be updated if changes are made in the API.

In theory the usage is very simple, first you create a signal object manually, or with the help of the `createSignal` function.

```js
const counterSignal = createSignal({
  initialValue: 0,
});
```

Then you can use this object with the `useSignal` hook inside of any component

```js
const App = () => {
  const { state: count, setState: setCount } = useSignal(counterSignal);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};
```
