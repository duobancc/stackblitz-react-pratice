const { useState } = require('react');
import { useState, useEffect } from 'react';

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(document.title);
  }, [count]);

  useEffect(() => {
    console.log('这和didMount 是一样的东西吗？ useEffect 能等同于生命周期吗？');
  }, []);

  useEffect(() => {
    console.log(
      'useEffect 不能等同于生命周期，生命周期函数只会在固定的时机执行一次，类似didMount 的useEffect 它是多次不同代码位置在执行，所以可以说它只是有didMount 的特性'
    );
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export function ClearEffect() {
  const [text, setText] = useState('');
  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('发送搜索请求', text);
    }, 500);

    return () => {
      // 这里一定要注意该函数与 class 组件中的 componentWillUnmount 的区别，官方文档中的案例存在一定的误导性。如果 deps 传入空数据，则两者是类似的，否则他们完全不一样，effect 与 clear effect 都有可能执行多次
      console.log('清除定时器');
      // 每次变更都会去执行
      clearTimeout(timer);
      console.log(timer);
    };
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="请输入内容..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
