import { Box, Typography } from "@mui/material"
import NavBar from "../components/ResponsiveAppBar"

const HomePage = () => {
    return (
        <Box>
            <NavBar />
            <Typography>
                This is the home page
            </Typography>
        </Box>
    )
}

export default HomePage