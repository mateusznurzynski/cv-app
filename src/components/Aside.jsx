import '../styles/Aside.css';
import AsideTabButton from './AsideTabButton';
import Form from './Form';

function Aside({ tabs, onFieldEdit, currentTabId, setCurrentTabId }) {
  const currentTab = tabs.find((tab) => {
    return tab.id === currentTabId;
  });

  return (
    <div className='aside'>
      <h1>{currentTab.title}</h1>
      <div className='tab-buttons'>
        {tabs.map((tab) => {
          return (
            <AsideTabButton
              key={tab.id}
              innerHTML={tab.title}
              onClick={() => {
                setCurrentTabId(tab.id);
              }}
            />
          );
        })}
      </div>
      <Form
        tab={currentTab}
        onChange={(e) => {
          onFieldEdit(e.target.value, e.target.getAttribute('data-index'));
        }}
      />
    </div>
  );
}

export default Aside;
