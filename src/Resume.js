import { Grid, Paper } from "@mui/material";

import { CareerItem, EducationItem, ExperienceItem, Header, ProjectItem } from './components'

import { info } from './info.js'
import { BodySectionWrapper } from "./components/BodySectionWrapper";

export function Resume() {
    return (

        <Grid container justifyContent="center" >
            <Grid
                item
                xs={12}
                component={Paper}
                className="resumePaper"
                container
                sx={{
                    "padding": "1rem 2rem"
                }}
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
                    <BodySectionWrapper content={info.experience} itemComponent={ExperienceItem} />
                    <BodySectionWrapper content={info.project} itemComponent={ProjectItem} />
                </Grid>
            </Grid>
        </Grid>

    )
}
