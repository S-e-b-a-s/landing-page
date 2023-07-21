import React from "react";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image3D from "./images/icon.png";
import bancoFalabella from "./images/banco-falabella.png";
import falabella from "./images/falabella.png";
import pse from "./images/pse.png";
import appStore from "./images/app-store.png";
import googlePlay from "./images/google-play.png";
import puntoRed from "./images/punto-red.png";
import ContactMethod from "./components/ContactMethod";
import PaymentChannels from "./components/PaymentChannels";
import Footer from "./components/Footer";

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

const images = [
    {
        src: bancoFalabella,
        alt: "images1",
        onClick: () =>
            (window.location.href =
                "https://www.bancofalabella.com.co/page/beneficios-costo-0?gclid=CjwKCAjwhNWZBhB_EiwAPzlhNtvX0TwtzigugW7npUUZcu091pWQbgWwZJYyLcD38LhJg6Rn2lt4zhoCBX8QAvD_BwE&gclid=CjwKCAjw67ajBhAVEiwA2g_jEJS0V9L2aGjcdmlJqf--WKSDv7WhrFNwiyeTcAY3u6AJPA4qZ6DYdRoCl3EQAvD_BwE&gclsrc=aw.ds&gad=1"),
    },
    {
        src: falabella,
        alt: "images1",
        onClick: () => (window.location.href = "https://www.google.com/maps/search/Falabella/@4.5966649,-74.0962685,13z/data=!3m1!4b1?hl=es&entry=ttu"),
    },
    {
        src: pse,
        alt: "images1",
        onClick: () => (window.location.href = "https://payment.bancofalabella.com.co/payment/#!/login"),
    },
    {
        src: googlePlay,
        alt: "images1",
        onClick: () => (window.location.href = "https://play.google.com/store/apps/details?id=co.com.bancofalabella.mobile.omc&hl=es_CO&gl=US&pli=1"),
    },
    {
        src: appStore,
        alt: "images1",
        onClick: () => (window.location.href = "https://apps.apple.com/co/app/banco-falabella-colombia/id1150133320"),
    },
    {
        src: puntoRed,
        alt: "images1",
        onClick: () => (window.location.href = "https://www.google.com/maps/search/Punto+red/@4.5966626,-74.0964403,13z/data=!3m1!4b1?hl=es&entry=ttu"),
    },
];

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        height: "20vh",
                        backgroundImage: `linear-gradient(35deg, #abd73c 0%, #b8e63c 73%, #c4f53c 100%);`,
                    }}
                >
                    <Container sx={{ height: "100vh" }}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                            <Box>
                                <img style={{ width: "15rem" }} src={Image3D} alt="images1" />
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                <Typography sx={{ fontWeight: "500" }} variant="h5" component="div" gutterBottom>
                                    C&C y Falabella: Soluciones financieras para tus compras
                                </Typography>
                                <Typography sx={{ fontWeight: 400 }} variant="subtitle2" component="div" gutterBottom>
                                    C&C y Falabella se unen para ofrecerte una solución financiera para tus productos. Te invitamos a utilizar el canal de comunicación de
                                    tu preferencia para obtener más información.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "space-evenly", pt: "2rem", gap: "25px" }}>
                            <ContactMethod
                                Icon={PhoneInTalkIcon}
                                text="Comunicate con un asesor especializado en Bogota al número 601 - 7461174"
                                link="tel:+16017461174"
                            />
                            <ContactMethod
                                Icon={EmailIcon}
                                text="Escribenos por correo electronico comunicacionesprecast@cyc-bpo.com"
                                link="mailto:comunicacionesprecast@cyc-bpo.com"
                            />
                            <ContactMethod
                                Icon={WhatsAppIcon}
                                text="Si te queda mas facil, contamos con agentes especializados en nuestro canal de WhatsApp"
                                link="https://api.whatsapp.com/message/6UUK5XMISG6JI1?autoload=1&app_absent=0"
                            />
                            <ContactMethod
                                Icon={LocationOnIcon}
                                text="Si quieres Conocernos puedes acercarte a nuestras instalaciones"
                                link="https://www.google.com/maps/place/C%26C+Services+S.A.S./@4.6033324,-74.0684109,15z/data=!4m6!3m5!1s0x8e3f99a3a6d494ff:0x14a75d64ba24d03c!8m2!3d4.6033324!4d-74.0684109!16s%2Fg%2F11fxcdjnbv?entry=ttu"
                            />
                        </Box>
                        <Box sx={{ py: "3rem" }}>
                            <Typography sx={{ textAlign: "center", fontSize: "15px" }} variant="subtitle2" component="div" gutterBottom>
                                Contamos con los siguientes canales de pago para tus productos financieros, para que puedas seguir disfrutando de los beneficios que
                                Falabella tiene para ti.
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
