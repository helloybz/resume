import { Fab, Grid } from "@mui/material";
import { forwardRef, useRef } from "react";
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from "react-to-print";

import { Resume } from "./Resume"
import "./Resume.css";

export function ResumeWrapper() {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
        print: window.print
    });

    const ReferredResume = forwardRef((props, ref) => (
        <div ref={ref}><Resume /></div>
    ))
    const resumeRef = useRef(null)
    return (
        <Grid container justifyContent="center">
            <Fab
                sx={{
                    position: "fixed",
                    right: {
                        "xs": "1rem",
                        "lg": "3rem"
                    },
                    bottom: {
                        "xs": "1rem",
                        "lg": "3rem"
                    },
                    zIndex: "20",
                }}
                onClick={handlePrint}
            >
                <PrintIcon />
            </Fab>
            <Grid
                item
                xs={12}
                sx={{
                    paddingTop: {
                        "xs": "0",
                        "md": "3rem",
                    },
                    maxWidth: "210mm",
                    // minHeight: "296mm",

                }}
            >
                <ReferredResume ref={resumeRef} />
            </Grid>
        </Grid >
    )
}
