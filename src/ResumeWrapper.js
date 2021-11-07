import { Grid } from "@mui/material";
import { Resume } from "./Resume"

export function ResumeWrapper() {

    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={12}
                sm={8}
                sx={{
                    paddingTop: {
                        "xs": "0",
                        "lg": "3rem"
                    }
                }}
            >
                <Resume />
            </Grid>
        </Grid >
    )
}
