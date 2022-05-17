import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaproduto/ListaProduto';
import './TabProduto.css';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ backgroundColor: "#958143"}}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='font' label="Todas os produtos" value="1" />
            <Tab className='font' label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo , font ">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='texto , font '>"O impacto e a responsabilidade que nossa plataforma carrega é o nosso grande diferencial
                E a principal razão pela qual trabalhamos incansavelmente para oferecer excelência e qualidade em cada ação.
                Nosso objetivo e principal função é cuidar de você, sem esquecer que o nosso planeta.
                Sabemos que um trabalho ético e responsável é fundamental e imprescindível para oferecer qualidade de vida para os nossos clientes
                E todos nossos recursos são baseados nos benefícios dos elementos naturais que nosso planeta pode nos oferecer.
                Buscamos nos produtos naturais os cuidados com o bem-estar dos nossos clientes, levando os benefícios dos nutrientes e de origem reciclável.
                Nosso principal objetivo é democratizar o acesso à saúde a todos os brasileiros, por meio de plataforma tecnológica, ofertando produtos naturais
                E serviços sustentáveis com qualidade e preços justos."</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;