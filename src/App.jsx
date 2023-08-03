import React from "react";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Local Components
import ContactMethod from "./components/ContactMethod";
import PaymentChannels from "./components/PaymentChannels";
import Footer from "./components/Footer";
import { URLS } from "./components/constants"; // Import constants for URLs

// Images
import image3D from "./images-webp/hand3d.webp";
import bancoFalabella from "./images-webp/banco-falabella.webp";
import falabella from "./images-webp/falabella.webp";
import pse from "./images-webp/pse.webp";
import appStore from "./images-webp/app-store.webp";
import googlePlay from "./images-webp/google-play.webp";
import puntoRed from "./images-webp/punto-red.webp";
import falabellaLogo from "./images-webp/falabella-logo.webp";
import cycLogo from "./images-webp/cyc-logo.webp";
import phoneIcon from "./images/phone.gif";
import emailIcon from "./images/email.gif";
import speechBubble from "./images/speech-bubble.gif";
import locationIcon from "./images/google-maps.gif";
import letterX from "./images-webp/cross.webp";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

// Constants for Payment Channels' URLs
const images = [
    {
        src: bancoFalabella,
        alt: "images1",
        onClick: () => (window.location.href = URLS.bancoFalabella), // Use the constant
    },
    {
        src: falabella,
        alt: "images1",
        onClick: () => (window.location.href = URLS.falabellaMaps), // Use the constant
    },
    {
        src: pse,
        alt: "images1",
        onClick: () => (window.location.href = URLS.pse), // Use the constant
    },
    {
        src: googlePlay,
        alt: "images1",
        onClick: () => (window.location.href = URLS.googlePlay), // Use the constant
    },
    {
        src: appStore,
        alt: "images1",
        onClick: () => (window.location.href = URLS.appStore), // Use the constant
    },
    {
        src: puntoRed,
        alt: "images1",
        onClick: () => (window.location.href = URLS.puntoRedMaps), // Use the constant
    },
];

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ padding: "2rem" }}>
                    <Container
                        sx={{
                            "@media screen and (min-width: 770px)": {
                                paddingLeft: "20rem", // Add padding to the left
                                paddingRight: "20rem", // Add padding to the right
                            },
                        }}
                    >
                        {/* Header Section */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "0.5rem",
                                p: "0.5rem",
                            }}
                        >
                            <img style={{ width: "30px" }} src={cycLogo} alt="images1" />
                            <img style={{ width: 30, height: 30 }} src={letterX} alt="images1" />
                            <img style={{ width: "30px", borderRadius: "10px" }} src={falabellaLogo} alt="images1" />
                        </Box>
                        {/* Main Content */}
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", my: "2rem" }}>
                            <img style={{ width: "100%", maxWidth: "15rem" }} src={image3D} alt="images1" />
                            <Typography variant="h5" component="div" gutterBottom>
                                ¡C&C y Falabella se unen para tí! Conéctate y Descubre Nuestros Canales de Comunicación
                            </Typography>
                            <Typography variant="subtitle2" component="div" gutterBottom>
                                Te invitamos a utilizar el canal de comunicación de tu preferencia para obtener más información.
                            </Typography>
                        </Box>
                        {/* Contact Methods */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "25px", textAlign: "center", my: "2rem" }}>
                            {/* Each ContactMethod component represents a different way of communication */}
                            <ContactMethod text="Comunícate con un asesor especializado" link="tel:6017461174" gif={phoneIcon} />
                            <ContactMethod text="Escríbenos por correo electrónico" link="mailto:comunicacionesprecast@cyc-bpo.com" gif={emailIcon} />
                            <ContactMethod
                                text="Si te queda más fácil, contamos con agentes especializados en nuestro canal de WhatsApp"
                                link="https://wa.me/573103157116?text=Buen%20d%C3%ADa%20"
                                gif={speechBubble}
                            />
                            <ContactMethod text="Si quieres conocernos, puedes acercarte a nuestras instalaciones" link={URLS.googleMaps} gif={locationIcon} />
                        </Box>
                        {/* Payment Channels */}
                        <Box sx={{ py: "3rem" }}>
                            <Typography variant="subtitle2" component="div" gutterBottom>
                                Falabella cuenta con los siguientes canales de pago para tus productos financieros, para que puedas seguir disfrutando de los beneficios
                                que Falabella tiene para ti.
                            </Typography>
                        </Box>
                        <PaymentChannels paymentChannels={images} />
                        <Footer />
                    </Container>
                </Box>
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default App;
