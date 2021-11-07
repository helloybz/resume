import { Grid, Paper } from "@mui/material";

import { Header, Education, Experience, Project } from './components'

import './Resume.css';
import { info } from './info.js'
import { BodySectionWrapper } from "./components/BodySectionWrapper";
import { CareerItem } from "./components/CareerItem/CareerItem";

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
                    <BodySectionWrapper content={info.career} itemComponent={CareerItem} />
                    <Education education={info.education} />
                    <Experience experience={info.experience} />
                    <Project project={info.project} />
                </Grid>
            </Grid>
        </Grid>
    )
}
