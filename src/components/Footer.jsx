import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ py: "5rem" }}>
            <Typography variant="caption" sx={{ color: "gray" }}>
                <Typography variant="caption" sx={{ color: "gray" }}>
                    Aviso Legal: El presente mensaje y todo su contenido corresponde a información confidencial, por lo que no puede ser usado ni divulgado por personas
                    diferentes a su destinatario y/o titular de la información. Si usted no es el destinatario o ha recibido este correo por error, equivocación u
                    omisión, por favor notifique inmediatamente al remitente y elimínelo de su buzón. En este sentido está prohibida su lectura, grabación, retención,
                    modificación, reimpresión, utilización, revelación, divulgación o aprovechamiento con cualquier propósito; conductas que pueden constituir violación
                    de datos personales penalizadas según lo previsto en la Ley 1273 del 2009 y en el Código Penal Colombiano. Así mismo, le recordamos su deber de
                    mantener la reserva sobre el contenido, los datos o información de contacto del remitente, al igual que los documentos adjuntos, para dar cumplimiento
                    a la Ley 1581 de 2012.
                </Typography>
            </Typography>
        </Box>
    );
};

export default Footer;
