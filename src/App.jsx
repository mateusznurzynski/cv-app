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
        { value: '', label: 'Your full name', id: 'fullName', type: 'text' },
        { value: '', label: 'E-mail address', id: 'email', type: 'email' },
        { value: '', label: 'Phone number', id: 'phone', type: 'tel' },
      ],
    },
    {
      title: 'Education',
      resultHeader: 'Education',
      id: 'education',
      fieldSet: [
        { value: '', label: 'School name', id: 'schoolName', type: 'text' },
        { value: '', label: 'Study name', id: 'studyName', type: 'text' },
        { value: '', label: 'Study End Date', id: 'studyDate', type: 'date' },
      ],
    },
    {
      title: 'Practical experience',
      resultHeader: 'Experience',
      id: 'experience',
      fieldSet: [
        { value: '', label: 'Company name', id: 'companyName', type: 'text' },
        {
          value: '',
          label: 'Position/Title',
          id: 'positionTitle',
          type: 'text',
        },
        {
          value: '',
          label: 'Responsibilities',
          id: 'responsibilities',
          type: 'text',
        },
        { value: '', label: 'Start date', id: 'startDate', type: 'date' },
        { value: '', label: 'End date', id: 'endDate', type: 'date' },
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
