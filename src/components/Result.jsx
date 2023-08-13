import Section from './Section';

function Result({ tabs }) {
  return (
    <div className='curriculum'>
      {tabs.map((tab) => {
        return <Section key={tab.id} tab={tab} />;
      })}
    </div>
  );
}

export default Result;
