import React from 'react';
import {
  Card, CardContent, Typography, Avatar, Link,
} from '@mui/material';
import styles from './UnderDev.module.css';
import myImage from './myImage.jpeg';

function UnderDev() {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Avatar
          alt="My Image"
          src={myImage}
          className={styles.avatar}
          sx={{
            width: 150,
            height: 150,
          }}
        />
        <Typography variant="h5" component="h2" className={styles.title}>
          Madireddy Sai Prasad Reddy
        </Typography>
        <Typography variant="body1" className={styles.bioText}>
          {' '}
          <Link
            href="https://saiprasadreddy33.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            className={styles.link}
          >
            Check Out my Portfolio page
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UnderDev;
