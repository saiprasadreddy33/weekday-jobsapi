import React from 'react';

import {
  FormControl, InputLabel, MenuItem, Select, OutlinedInput, IconButton, InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { availableRolesSelector } from '../../selectors/jobs';
import { setPreferredRoles } from '../../stores/jobFilters';
import { filtersSelector } from '../../selectors/jobFilters';

export default function AvailableRolesSelect() {
  const dispatch = useDispatch();
  const availableRoles = useSelector(availableRolesSelector);
  const {
    preferredRoles,
  } = useSelector(filtersSelector);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    dispatch(setPreferredRoles(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  const handleClear = () => {
    dispatch(setPreferredRoles([]));
  };

  return (
    <FormControl sx={{ width: 200 }} size="small">
      <InputLabel id="title">Role</InputLabel>
      <Select
        labelId="role_select"
        multiple
        value={preferredRoles || []}
        onChange={handleChange}
        input={(
          <OutlinedInput
            label="role_select"
            endAdornment={(
              <InputAdornment position="end">
                {preferredRoles && preferredRoles.length > 0 && (
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
        {availableRoles.map((name) => (
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
