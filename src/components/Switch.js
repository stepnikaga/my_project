import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

const SwitchContainer = styled.div`
    bottom: 0;
    right: 0;
`
const Switch = ({ handleSwitch, switchChecked }) => {
    return (
        <SwitchContainer>
            <FormControl component='fieldset'>
                <FormGroup>
                    <FormControlLabel control={<FilterSwitch checked={switchChecked} onChange={handleSwitch} />}/>
                </FormGroup>
            </FormControl>
            <FormLabel component='legend'>A - Z</FormLabel>
        </SwitchContainer>
    )
}
export default Switch