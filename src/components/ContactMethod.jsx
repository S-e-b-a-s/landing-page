import PropTypes from "prop-types";
import { Box, IconButton, Typography } from "@mui/material";

const ContactMethod = ({ Icon, text, link }) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={() => (window.location.href = link)}>
            <Icon sx={{ fontSize: "4rem", color: "#abd73c" }} />
        </IconButton>
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
            {text}
        </Typography>
    </Box>  
);

ContactMethod.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ContactMethod;
