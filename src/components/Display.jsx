import Result from './Result';
import '../styles/Display.css';

function Display({ tabs }) {
  return (
    <div className='display-container'>
      <Result tabs={tabs} />
    </div>
  );
}

export default Display;
