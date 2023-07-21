import PropTypes from "prop-types";
import { Box } from "@mui/material";

const ImageBox = ({ src, alt, onClick }) => (
    <Box>
        <img style={{ width: "10rem", cursor: onClick ? "pointer" : undefined }} src={src} alt={alt} onClick={onClick} />
    </Box>
);

ImageBox.propTypes = {
    src: PropTypes.elementType.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ImageBox;
