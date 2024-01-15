import Demo001 from './useEffectDemo';

import './style.css';
export default function App({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <hr />
      <h1>usEffect</h1>
      <Demo001 />
      <hr />
    </div>
  );
}
