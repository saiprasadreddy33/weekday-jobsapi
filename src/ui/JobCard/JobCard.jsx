import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';

import {
  Modal, Paper, Box, Button, AvatarGroup, Avatar, Typography, IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material'; // Import Close icon
import styles from './JobCard.module.css';
import EstimatedSalary from '../EstimatedSalary';

function JobCard({
  job,
  isLastCard,
  fetchMoreJobs,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [isReferralAsked, setIsReferralAsked] = useState(false);

  const ref = useRef(null);

  const {
    jdUid,
    jdLink,
    jobRole,
    location,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    minExp,
    jobDetailsFromCompany,
    companyName,
  } = job;

  const observer = useMemo(() => new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) fetchMoreJobs();
  }, {
    root: null,
    rootMargin: '20px',
    threshold: 0.3,
  }), [fetchMoreJobs]);

  useEffect(() => {
    if (isLastCard && ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isLastCard, observer]);

  const isOriginalSalary = useMemo(() => Math.random() > 0.6, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Paper
      square={false}
      elevation={3}
      className={styles.jobCard}
      hover
      ref={ref}
    >
      <div className={styles.heroItems}>
        <img
          src={`https://picsum.photos/200/300?random=${jdUid}`}
          alt="Company Logo"
          className={styles.logo}
        />

        <div className={styles.heroDetails}>
          <a
            href={jdLink}
            className={styles.companyName}
            target="_blank"
            rel="noreferrer"
          >
            {companyName}
          </a>
          {jobRole && (<div className={styles.role}>{jobRole}</div>)}
          {location && (<div className={styles.location}>{location}</div>)}
        </div>
      </div>
      <EstimatedSalary
        minJdSalary={minJdSalary}
        maxJdSalary={maxJdSalary}
        salaryCurrencyCode={salaryCurrencyCode}
        isOriginalSalary={isOriginalSalary}
      />
      <div className={styles.jdContainer}>
        <div className={styles.about}>
          About Company
        </div>
        <div className={styles.jdContent}>
          {jobDetailsFromCompany}
        </div>
        <button
          type="button"
          className={styles.showMore}
          onClick={() => setIsModalOpen(true)}
        >
          Show More
        </button>
      </div>
      {minExp && (
        <div className={styles.expContainer}>
          <div className={styles.expLabel}>
            Minimum Experience
          </div>
          <div className={styles.expValue}>
            {`${minExp} ${minExp > 1 ? 'years' : 'year'}`}
          </div>
        </div>
      )}
      <Button
        variant="contained"
        className={styles.cta}
        onClick={() => setIsApplied(true)}
      >
        {!isApplied ? (
          <>
            <div className={styles.flash}>⚡</div>
            Easy Apply
          </>
        ) : (
          <>
            Applied
            <div className={styles.flash}>🔥</div>
          </>
        )}
      </Button>
      <Button
        variant="contained"
        className={styles.cta}
        onClick={() => {
          setIsReferralAsked(true);
        }}
        disabled={isReferralAsked}
      >
        {isReferralAsked ? (
          <>
            Referral Asked
            <div className={styles.flash}>🔥</div>
          </>
        ) : (
          <>
            <AvatarGroup>
              <Avatar
                alt="Avatar"
                src="https://media.licdn.com/dms/image/D5603AQEBi75fpp1qmg/profile-displayphoto-shrink_800_800/0/1706982576062?e=1716422400&amp;v=beta&amp;t=SvDRNYKjV7W1b_Z5VzFfycIzyVvPJ0xwzwJ0s1GP7Wc"
              />
            </AvatarGroup>
            <Typography variant="body1" className={styles.referralText}>
              Ask for referral
            </Typography>
          </>
        )}
      </Button>
      <Modal
        open={isModalOpen}
        onClose={closeModal} // Close modal when clicked outside
      >
        <Box className={styles.modalContent}>
          <div className={styles.modalHeader}>
            Job Description
            <IconButton
              className={styles.closeButton}
              onClick={closeModal}
            >
              <Close />
            </IconButton>
          </div>
          <div>{jobDetailsFromCompany}</div>
        </Box>
      </Modal>
    </Paper>
  );
}

export default JobCard;
