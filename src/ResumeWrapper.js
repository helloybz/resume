import { forwardRef, useRef } from 'react';
import { Fab, Grid } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import PrintIcon from '@mui/icons-material/Print';
import { Resume } from "./Resume"

export function ResumeWrapper() {
    const handlePrint = useReactToPrint({
        content: () => resumeRef.current,
    });

    const ReferredResume = forwardRef((props, ref) => (
        <div ref={ref} >
            <Resume />
        </div>
    ));
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
                sm={8}
                sx={{
                    paddingTop: {
                        "xs": "0",
                        "lg": "3rem"
                    }
                }}
            >
                <ReferredResume ref={resumeRef} />
            </Grid>
        </Grid >
    )
}
