import { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';
import Aside from './components/Aside';

function App() {
  const [tabs, setTabs] = useImmer([
    {
      title: 'Basic Information',
      id: 'basic',
      fieldSet: [
        { value: '', label: 'Your full name', id: 'fullName' },
        { value: '', label: 'E-mail address', id: 'email' },
        { value: '', label: 'Phone number', id: 'phone' },
      ],
    },
    {
      title: 'Education',
      id: 'education',
      fieldSet: [
        { value: '', label: 'School name', id: 'schoolName' },
        { value: '', label: 'Study', id: 'studyName' },
        { value: '', label: 'Date', id: 'studyDate' },
      ],
    },
    {
      title: 'Practical experience',
      id: 'experience',
      fieldSet: [
        { value: '', label: 'Company name', id: 'companyName' },
        { value: '', label: 'Position/Title', id: 'positionTitle' },
        { value: '', label: 'Responsibilities', id: 'responsibilities' },
        { value: '', label: 'Start date', id: 'startDate' },
        { value: '', label: 'End date', id: 'endDate' },
      ],
    },
  ]);
  const [currentTabId, setCurrentTabId] = useState('basic');

  const currentTabIndex = tabs.findIndex((tab) => {
    return tab.id === currentTabId;
  });

  const editField = (newValue, fieldIndex) => {
    setTabs((tabs) => {
      tabs[currentTabIndex].fieldSet[fieldIndex].value = newValue;
    });
  };
  return (
    <div className='container'>
      <Aside
        tabs={tabs}
        onFieldEdit={editField}
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
      />
    </div>
  );
}

export default App;
