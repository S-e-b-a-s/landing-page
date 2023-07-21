import { Box } from "@mui/material";
import ImageBox from "./ImageBox";
import PropTypes from "prop-types";

const PaymentChannels = ({ paymentChannels }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                pt: "1rem",
                gap: "2rem",
            }}
        >
            {paymentChannels.map((channel) => (
                <ImageBox key={channel.src} {...channel} />
            ))}
        </Box>
    );
};

PaymentChannels.propTypes = {
    paymentChannels: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PaymentChannels;
