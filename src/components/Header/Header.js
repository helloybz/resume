import { Grid } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

import { Contact } from "./Contact.js";
import { HeaderDivider } from "./HeaderDivider.js";

export function Header({ printable = false, name, position, email, cellPhone, github, blog }) {
    return (
        <Grid item xs={12} container alignItems="flex-end" sx={{ padding: { "xs": printable ? "0 1rem" : "0", "md": "0 1rem" } }}>
            <Grid item container xs={printable ? 8 : 12} md={8} >
                <Grid item xs={12} sx={{
                    "fontSize": "4rem",
                    "fontWeight": "bold"
                }}>
                    {name}
                </Grid>
                <Grid item xs={12} sx={{
                    "fontSize": { "xs": printable ? "2.5rem" : "1.8rem", "md": "2.5rem" },
                    "fontWeight": "light",
                    "flexGrow": 1,
                }}>
                    {position}
                </Grid>
            </Grid>
            <Grid item xs={printable ? 4 : 12} md={4}
                container
                className="contacts"
                direction="column"
                justifyContent="flex-end"
                alignItems="baseline"
            >
                <Contact printable={printable} icon={<PhoneIcon />} value={cellPhone} />
                <Contact printable={printable} icon={<MailIcon />} value={email} />
                <Contact printable={printable} icon={<GitHubIcon />} value={github} />
                <Contact printable={printable} icon={<GitHubIcon />} value={blog} />
            </Grid>
            <HeaderDivider />
        </Grid >
    )
};

