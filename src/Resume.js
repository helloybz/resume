import { Grid, Paper } from "@mui/material";

import { CareerItem, EducationItem, ExperienceItem, IntroduceItem, SkillSetItem, Header, ProjectItem } from './components'

import { info } from './info.js'
import { BodySectionWrapper } from "./components/BodySectionWrapper";

export function Resume({ printable = false }) {
    return (
        <Grid container justifyContent="center" sx={{ maxWidth: '210mm' }}>
            <Grid className="page_1" item container component={printable ? null : Paper}
                sx={{
                    maxWidth: '210mm',
                    minHeight: "297mm",
                    padding: { "xs": "1rem", "md": "3rem" },
                    marginBottom: printable ? 0 : '1rem'
                }}
            >
                <Grid item xs={12}>
                    <Header
                        printable={printable}
                        name={info.name}
                        position={info.position}
                        hooks={info.hooks}
                        cellPhone={info.cellPhone}
                        email={info.email}
                        github={info.github}
                        blog={info.blog}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    container
                    sx={{
                        "padding": { "xs": printable ? "1rem 2rem" : "0", "md": "1rem 1.1rem" }
                    }}
                >
                    <BodySectionWrapper printable={printable} content={info.introduce} itemComponent={IntroduceItem} />
                    <BodySectionWrapper printable={printable} content={info.skillset} itemComponent={SkillSetItem} />
                    <BodySectionWrapper printable={printable} content={info.career} itemComponent={CareerItem} />
                    <BodySectionWrapper printable={printable} content={info.education} itemComponent={EducationItem} />
                </Grid>
            </Grid>
        </Grid >

    )
}
