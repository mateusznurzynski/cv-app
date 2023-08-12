import { useState } from 'react';
import '../styles/Aside.css';

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
    </div>
  );
}

export default Aside;
