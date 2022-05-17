import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './Vitrine.css';

function Vitrine(): JSX.Element {


    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='fund' >
                <Grid xs={6} className="in">
                </Grid>
                <Grid alignItems='center' xs={6} >
                    <Box className='borda' >
                        <Box >
                            <h2 className="txt1V , tst , font ">O impacto e a responsabilidade que nossa plataforma carrega é o nosso grande diferencial e a principal razão pela qual trabalhamos incansavelmente para oferecer excelência e qualidade em cada ação.
                                Nosso maior objetivo é apoiar a conscientização a população para pautas voltadas ao desmatamento, descarte de materiais em locais inadequados e reciclagem! </h2>
                        </Box>
                        <Box>
                            <a href='/login' >
                                <Typography variant='subtitle1' gutterBottom align='center' className='txt1 , font '>DESEJA CONHEÇER NOSSO E-COMMERCE ? CLIQUE AQUI !</Typography>
                            </a>
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </>
    );

}



export default Vitrine;