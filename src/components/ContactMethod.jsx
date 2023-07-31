import PropTypes from "prop-types";
import { Box, IconButton, Typography } from "@mui/material";

const ContactMethod = ({ Icon, text, link, gif }) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton onClick={() => (window.location.href = link)}>
            {gif ? <img src={gif} alt="Gif" style={{ width: "4rem", height: "4rem" }} /> : <Icon sx={{ fontSize: "4rem", color: "#abd73c" }} />}
        </IconButton>
        <Typography variant="subtitle2" sx={{ fontWeight: 500, textAlign: "center" }}>
            {text}
        </Typography>
    </Box>
);

ContactMethod.propTypes = {
    Icon: PropTypes.elementType,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    gif: PropTypes.string,
};

export default ContactMethod;
