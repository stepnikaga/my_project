import { Switch, FormLabel, FormControl, FormControlLabel, FormGroup,  } from "@material-ui/core";
import styled from "styled-components";

const SwitchContainer = styled.div`
    bottom: 0;
    right: 0;
`
  
const FilterSwitch = ({ handleFilterSwitch, switchChecked }) => {
    return (
        <SwitchContainer>
            <FormControl component='fieldset'>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={switchChecked} onChange={handleFilterSwitch} />}/>
                </FormGroup>
            </FormControl>
            <FormLabel component='legend'>A-Z</FormLabel>
        </SwitchContainer>
    )
}
export default FilterSwitch