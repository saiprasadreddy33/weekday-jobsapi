import React, { useState } from 'react';

import {
  FormControl, InputLabel, MenuItem, Select, Modal, Box, Typography, Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPrefersOnsiteOrRemote } from '../../stores/jobFilters';
import { filtersSelector } from '../../selectors/jobFilters';

function RemoteOrOnSiteFilter() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPreference, setSelectedPreference] = useState('');

  const {
    prefersOnsiteOrRemote,
  } = useSelector(filtersSelector);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPreference(selectedValue); // Update selected preference
    dispatch(setPrefersOnsiteOrRemote(selectedValue));
    if (selectedValue !== 'remote') {
      setIsModalOpen(true); // Show modal if preference is not remote
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(setPrefersOnsiteOrRemote('remote')); // Set preference back to remote
  };

  return (
    <>
      <FormControl sx={{ width: 150 }} size="small">
        <InputLabel>Preference</InputLabel>
        <Select
          labelId="remote-label"
          value={prefersOnsiteOrRemote}
          onChange={handleChange}
        >
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="hybrid">Hybrid</MenuItem>
          <MenuItem value="inoffice">In Office</MenuItem>
        </Select>
      </FormControl>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2,
        }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            No jobs available for
            {' '}
            {selectedPreference === 'hybrid' ? 'Hybrid' : 'In Office'}
            {' '}
            preference
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            There are currently no jobs available for
            {' '}
            {selectedPreference === 'hybrid' ? 'Hybrid' : 'In Office'}
            {' '}
            preference. Please try a different preference.
          </Typography>
          <Button onClick={handleModalClose} sx={{ mt: 2 }}>Close</Button>
        </Box>
      </Modal>
    </>
  );
}

export default RemoteOrOnSiteFilter;
