import React from 'react';

import { useSelector } from 'react-redux';
import JobList from '../JobList';
import JobTabs from '../JobTabs';
import { activeTabSelector } from '../../selectors/tabs';
import { AVAILABLE_TABS } from '../../stores/tabs';
import UnderDev from '../../ui/UnderDev';
import JobFilters from '../JobFilters';
import Header from '../header';

function Home() {
  const activeTab = useSelector(activeTabSelector);

  return (
    <div>
      <Header />
      <JobTabs />
      {activeTab === AVAILABLE_TABS.all ? (
        <div>
          <JobFilters />
          <JobList />
        </div>
      ) : (
        <UnderDev />
      )}
    </div>
  );
}

export default Home;
