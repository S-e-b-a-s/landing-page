import { Box, Typography } from "@mui/material";

const AttributionLink = ({ href, title, children }) => (
    <Typography variant="caption">
        <a style={{ textDecoration: "none", color: "gray" }} href={href} title={title}>
            {children}
        </a>
    </Typography>
);

const Footer = () => {
    return (
        <Box sx={{ py: "5rem", display: "flex", flexDirection: "column", gap: "0.2rem", textAlign: "justify" }}>
            <Typography variant="caption" sx={{ color: "gray" }}>
                Aviso Legal: El presente mensaje y todo su contenido corresponde a información confidencial, por lo que no puede ser usado ni divulgado por personas
                diferentes a su destinatario y/o titular de la información. Si usted no es el destinatario o ha recibido este correo por error, equivocación u omisión,
                por favor notifique inmediatamente al remitente y elimínelo de su buzón. En este sentido está prohibida su lectura, grabación, retención, modificación,
                reimpresión, utilización, revelación, divulgación o aprovechamiento con cualquier propósito; conductas que pueden constituir violación de datos personales
                penalizadas según lo previsto en la Ley 1273 del 2009 y en el Código Penal Colombiano. Así mismo, le recordamos su deber de mantener la reserva sobre el
                contenido, los datos o información de contacto del remitente, al igual que los documentos adjuntos, para dar cumplimiento a la Ley 1581 de 2012.
            </Typography>
            <Typography variant="caption" sx={{ color: "gray", pt: "1rem" }}>
                Attributions:
            </Typography>
            <AttributionLink href="https://www.freepik.com/free-psd/3d-business-marketing-background_16691739.htm#query=3d%20illustration&position=18&from_view=keyword&track=ais">
                -Image by Freepik
            </AttributionLink>
            <AttributionLink href="https://www.flaticon.com/free-animated-icons/phone" title="phone animated icons">
                -Phone animated icons created by Freepik - Flaticon
            </AttributionLink>
            <AttributionLink href="https://www.flaticon.com/free-animated-icons/message" title="message animated icons">
                -Message animated icons created by Freepik - Flaticon
            </AttributionLink>
            <AttributionLink href="https://www.flaticon.com/free-animated-icons/email" title="email animated icons">
                -Email animated icons created by Freepik - Flaticon
            </AttributionLink>
            <AttributionLink href="https://www.flaticon.com/free-animated-icons/google-maps" title="google maps animated icons">
                -Google maps animated icons created by Freepik - Flaticon
            </AttributionLink>
        </Box>
    );
};

export default Footer;
