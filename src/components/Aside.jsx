import { useState } from 'react';
import '../styles/Aside.css';
import AsideTabButton from './AsideTabButton';

function Aside() {
  const [tabs, setTabs] = useState([
    {
      title: 'Basic Information',
      id: 'basic',
      fieldSet: {
        name: '',
        email: '',
        phoneNumber: '',
      },
    },
    {
      title: 'Education',
      id: 'education',
      fieldSet: {
        schoolName: '',
        studyTitle: '',
        studyDate: '',
      },
    },
    {
      title: 'Practical experience',
      id: 'experience',
      fieldSet: {
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startDate: '',
        endDate: '',
      },
    },
  ]);
  const [currentTabId, setCurrentTabId] = useState('basic');

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
    </div>
  );
}

export default Aside;
