import React, { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { filteredJobsSelector, lastCardLoaderSelector, maxLoadedPageSelector } from '../../selectors/jobs';
import { fetchJobsOfPage } from '../../stores/jobs';
import JobCard from '../../ui/JobCard';
import styles from './JobList.module.css';
import JobCardLoading from '../../ui/JobCardLoading';

function JobList() {
  const dispatch = useDispatch();
  const allJobData = useSelector(filteredJobsSelector);
  const maxPagesLoaded = useSelector(maxLoadedPageSelector);
  const { isLoading, error } = useSelector(lastCardLoaderSelector);
  const selectedPreference = useSelector(state => state.jobFilters.prefersOnsiteOrRemote);

  const fetchMoreJobs = useCallback(() => {
    dispatch(fetchJobsOfPage({ pageToLoad: maxPagesLoaded + 1 }));
  }, [dispatch, maxPagesLoaded]);

  useEffect(() => {
    if (maxPagesLoaded === -1) {
      fetchMoreJobs();
    }
  }, [fetchMoreJobs, maxPagesLoaded]);

  const jobsToShow = useMemo(() => {
    if (!selectedPreference || selectedPreference === 'remote') {
      return allJobData;
    } 
      return allJobData.filter(job => job.onsiteOrRemote === selectedPreference);
    
  }, [allJobData, selectedPreference]);

  const jobsLength = jobsToShow?.length;

  const loaderComponent = useMemo(() => (
    Array.from({ length: 7 }).map((_, idx) => (
      <JobCardLoading key={idx} />
    ))
  ), []);

  return (
    <div className={styles.jobList}>
      {jobsToShow?.map((job, idx) => (
        <JobCard
          key={job.jdUid}
          job={job}
          isLastCard={idx === jobsLength - 1}
          fetchMoreJobs={fetchMoreJobs}
        />
      ))}
      {isLoading && loaderComponent}
      {error && (
        <div className={styles.error}>
          Failed To Fetch More Jobs
          <Button onClick={fetchMoreJobs}>Retry</Button>
        </div>
      )}
    </div>
  );
}

export default JobList;
