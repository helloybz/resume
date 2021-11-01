import { Grid, Paper } from "@mui/material";

import { Header, Career, Education, Experience, Project } from './components'

import './Resume.css';
import { info } from './info.js'

export function Resume() {
    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={12}
                component={Paper}
                className="resumePaper"
                container
            >
                <Grid item xs={12}>
                    <Header
                        name={info.name}
                        position={info.position}
                        email={info.email}
                        github={info.github}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Career career={info.career} />
                    <Education education={info.education} />
                    <Experience experience={info.experience} />
                    <Project project={info.project} />
                </Grid>
            </Grid>
        </Grid>
    )
}
