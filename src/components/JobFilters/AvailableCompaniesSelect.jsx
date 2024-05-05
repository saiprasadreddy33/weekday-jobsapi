import React from 'react';

import {
  FormControl, InputLabel, MenuItem, Select, OutlinedInput, IconButton, InputAdornment,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { uniqueCompaniesSelector } from '../../selectors/jobs';
import { setPreferredCompanies } from '../../stores/jobFilters';
import { filtersSelector } from '../../selectors/jobFilters';

export default function AvailableCompaniesSelect() {
  const dispatch = useDispatch();
  const companies = useSelector(uniqueCompaniesSelector);
  const {
    preferredCompanies,
  } = useSelector(filtersSelector);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setPreferredCompanies(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  const handleClear = () => {
    dispatch(setPreferredCompanies([]));
  };

  return (
    <FormControl sx={{ width: 200 }} size="small">
      <InputLabel>Company</InputLabel>
      <Select
        labelId="company_select"
        multiple
        value={preferredCompanies || []}
        onChange={handleChange}
        input={(
          <OutlinedInput
            label="company_select"
            endAdornment={(
              <InputAdornment position="end">
                {preferredCompanies && preferredCompanies.length > 0 && (
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
        {companies.map((name) => (
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
