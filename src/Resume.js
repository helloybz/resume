import { Grid, Paper } from "@mui/material";

import { Header, Experience, Project, EducationItem } from './components'

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
                    <BodySectionWrapper content={info.education} itemComponent={EducationItem} />
                    <Experience experience={info.experience} />
                    <Project project={info.project} />
                </Grid>
            </Grid>
        </Grid>
    )
}
