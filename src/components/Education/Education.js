import { Grid, List, Typography } from "@mui/material"
import { EducationItem } from "../../components"
import "./Education.css"

export function Education({ education }) {
    return (
        <Grid container className="sectionContainer">
            <Grid item xs={3} className="tabTitle">
                <Typography variant="h4">
                    학력
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container component={List}>
                    {education.map((item, i) => {
                        return (
                            <EducationItem key={i}
                                {...item}
                            />
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}