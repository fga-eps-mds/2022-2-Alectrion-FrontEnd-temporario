import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import { StyledSelect } from './styles'
import { ReactNode } from 'react'

interface PropTypes {
  labelId?: string | undefined
  name: string
  type: string | undefined
  id?: string | undefined
  value: string | undefined
  label?: 'cargo'
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
  error?: any
}

const SelectJob: React.FC<PropTypes> = ({
  labelId,
  name,
  type,
  id,
  value,
  label,
  onChange,
  error
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
        <StyledSelect
          labelId={labelId}
          name={name}
          type={type}
          id={id}
          value={value}
          label={label}
          onChange={onChange}
          error={error}>
          <MenuItem value={'DELEGADO'}>Básico</MenuItem>
          <MenuItem value={'AGENTE_POLICIA'}>Agente de polícia</MenuItem>
          <MenuItem value={'ESCRIVAO'}>Escrivão</MenuItem>
          <MenuItem value={'COORDENADOR'}>Coordenador</MenuItem>
          <MenuItem value="CHEFE_SECAO">Chefe de seção</MenuItem>
          <MenuItem value="GENERICO">Genérico</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  )
}

export default SelectJob
