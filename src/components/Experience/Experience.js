import { Grid, List, Typography } from "@mui/material";

import { ExperienceItem } from "../../components";

export function Experience({ experience }) {
    return (
        <Grid container className="sectionContainer">
            <Grid item xs={3} className="tabTitle">
                <Typography variant="h4">
                    기타 활동
                </Typography>
            </Grid>
            <Grid item xs={12} container component={List}>
                {experience.map((item, i) => {
                    return (
                        <ExperienceItem key={i} {...item} />
                    )
                })}
            </Grid>
        </Grid>
    )
}