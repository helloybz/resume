import { Grid, List, Typography } from "@mui/material";

import { ProjectItem } from "../../components";

export function Project({ project }) {
    return (
        <Grid container className="sectionContainer">
            <Grid item xs={3} className="tabTitle">
                <Typography variant="h4">
                    프로젝트
                </Typography>
            </Grid>
            <Grid item xs={12} container component={List}>
                {project.map((item, i) => {
                    return (
                        <ProjectItem key={i}
                            {...item} />
                    )
                })}
            </Grid>
        </Grid>
    )
}