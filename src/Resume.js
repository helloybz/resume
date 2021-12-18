import { Grid, Paper } from "@mui/material";

import { CareerItem, EducationItem, ExperienceItem, Header, ProjectItem } from './components'

import { info } from './info.js'
import { BodySectionWrapper } from "./components/BodySectionWrapper";

export function Resume({ printable = false }) {
    return (
        <Grid container justifyContent="center" >
            <Grid className="page_1" item container component={printable ? null : Paper}
                sx={{
                    maxWidth: '210mm',
                    minHeight: "297mm",
                    padding: { "xs": "1rem", "md": "3rem" },
                    marginBottom: printable ? 0 : '1rem'
                }}>
                <Grid item xs={12}>
                    <Header
                        printable={printable}
                        name={info.name}
                        position={info.position}
                        email={info.email}
                        github={info.github}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        "padding": { "xs": printable ? "1rem 2rem" : "0", "md": "1rem 2rem" }
                    }}
                >
                    <BodySectionWrapper printable={printable} content={info.career} itemComponent={CareerItem} />
                    <BodySectionWrapper printable={printable} content={info.education} itemComponent={EducationItem} />
                    <BodySectionWrapper printable={printable} content={info.experience} itemComponent={ExperienceItem} />
                </Grid>
            </Grid>

            <Grid className="page_2" item container component={printable ? null : Paper} sx={{ maxWidth: '210mm', height: "297mm", padding: { "xs": "1rem", "md": "3rem" } }}>
                <Grid item container xs={12} sx={{
                    "padding": "1rem 2rem"
                }}>
                    <BodySectionWrapper content={info.project} itemComponent={ProjectItem} />
                </Grid>
            </Grid>
        </Grid >

    )
}
