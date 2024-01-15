import { FC, memo, useCallback, useState } from 'react';

import './style.css';

function Child() {
  console.log('我不想重新渲染');

  return <div>我不想重新渲染</div>;
}

function Input() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}> {count} </div>;
}

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Input />
      <Child />
      <hr />
      <Demo02 />
    </div>
  );
};

function _Child(props) {
  console.log('我不想重新渲染----', props);

  return <div>我不想重新渲染</div>;
}

const Child2 = memo(_Child);

function Demo02() {
  const [count, setCount] = useState(0);
  const p = useCallback(() => {}, []);
  return (
    <div>
      <div onClick={() => setCount(count + 1)}> {count} </div>
      <Child2 cb={p} />
    </div>
  );
}
