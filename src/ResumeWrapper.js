import { Grid } from "@mui/material";
import { Resume } from "./Resume"
import './ResumeWrapper.css';

export function ResumeWrapper() {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={8} className="resumeWrapper">
                <Resume />
            </Grid>
        </Grid >
    )
}
