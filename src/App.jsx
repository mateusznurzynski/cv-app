import { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';
import Aside from './components/Aside';
import Display from './components/Display';

function App() {
  const [tabs, setTabs] = useImmer([
    {
      title: 'Basic Information',
      resultHeader: '',
      id: 'basic',
      fieldSet: [
        { value: '', label: 'Your full name', id: 'fullName' },
        { value: '', label: 'E-mail address', id: 'email' },
        { value: '', label: 'Phone number', id: 'phone' },
      ],
    },
    {
      title: 'Education',
      resultHeader: 'Education',
      id: 'education',
      fieldSet: [
        { value: '', label: 'School name', id: 'schoolName' },
        { value: '', label: 'Study name', id: 'studyName' },
        { value: '', label: 'Study End Date', id: 'studyDate' },
      ],
    },
    {
      title: 'Practical experience',
      resultHeader: 'Experience',
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
      <Display tabs={tabs} />
    </div>
  );
}

export default App;
