import React from "react";

export default function Tutorial() {
  const [mode, setMode] = React.useState<number>(0);

  return (
    <>
      <h1>{ mode === 0 ? "Tutorial 1" : "Tutorial 2" }</h1>
      <button onClick={() => setMode(0)}>Tutorial 1</button>
      <button onClick={() => setMode(1)}>Tutorial 2</button>
      {mode === 0 ? <Parent1 /> : <Parent2 />}
      
      <pre>
        {mode === 0 ? <code>
          {`export const Parent1 = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <Child1 count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export const Child1 = ({ count }: { count: number }) => {
  return (
    <>
      <p>Count: {count}</p>
    </>
  );
}`}
        </code> : <code>
            {`export const Parent2 = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <p>Count: {count}</p>
      <Child2 count={count} />
    </>
  );
}

export const Child2 = ({ count }: { count: number }) => {
  const [childCount, setCount] = React.useState<number>(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}`}
        </code> }
      </pre>
    </>
  );
}


export const Parent1 = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <Child1 count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export const Child1 = ({ count }: { count: number }) => {
  return (
    <>
      <p>Count: {count}</p>
    </>
  );
}


export const Parent2 = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <p>Count: {count}</p>
      <Child2 count={count} />
    </>
  );
}

export const Child2 = ({ count }: { count: number }) => {
  const [childCount, setCount] = React.useState<number>(count);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}