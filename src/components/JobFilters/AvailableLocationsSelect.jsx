import React from 'react';

import {
  FormControl, InputLabel, MenuItem, Select, OutlinedInput, IconButton, InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { uniqueLocationsSelector } from '../../selectors/jobs';
import { setPreferredLocations } from '../../stores/jobFilters';
import { filtersSelector } from '../../selectors/jobFilters';

export default function AvailableLocationSelect() {
  const dispatch = useDispatch();
  const locations = useSelector(uniqueLocationsSelector);
  const {
    preferredLocations,
  } = useSelector(filtersSelector);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setPreferredLocations(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  const handleClear = () => {
    dispatch(setPreferredLocations([]));
  };

  return (
    <FormControl sx={{ width: 200 }} size="small">
      <InputLabel>Location</InputLabel>
      <Select
        labelId="location_select"
        multiple
        value={preferredLocations || []}
        onChange={handleChange}
        input={(
          <OutlinedInput
            label="location_select"
            endAdornment={(
              <InputAdornment position="end">
                {preferredLocations && preferredLocations.length > 0 && (
                  <IconButton
                    aria-label="clear"
                    onClick={handleClear}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            )}
          />
        )}
      >
        {locations.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
