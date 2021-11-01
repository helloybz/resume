import { Paper } from "@mui/material";
import "./ResumePaper.css"

export function ResumePaper({ child }) {
    return (
        <Paper className="resumePaper" elevation={8}>
            {child}
        </Paper>
    )
}