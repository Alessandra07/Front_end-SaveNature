import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import {Typography, Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

   
    var footerComponent;

    if(token != ""){

        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#958143", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className=' font , org '>Siga-nos nas redes sociais: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            
                            <a href="https://www.instagram.com/savenaturegen/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.gmail.com.br/" target="_blank" rel="noopener noreferrer">
                                <MailOutlineIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.google.com.br/" target="_blank" rel="noopener noreferrer">
                                <CallIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#8B4513", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a className="text-decorator-none" target="_blank" href="https://antigo.mma.gov.br/responsabilidade-socioambiental/producao-e-consumo-sustentavel/conceitos/consumo-sustentavel.html" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">SAVENATURE</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
       }
       return (
           <>
              {footerComponent}
           </>
       )
   }
   
   export default Footer;
   
