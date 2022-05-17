import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProduto.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([])
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  useEffect(() => {
    if (token == "") {
      toast.error('Voce precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate("/login")

    }
  }, [token])

  async function getProduto() {
    await busca("/produto", setProduto, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProduto()

  }, [produto.length])

  return (
    <>
      {
        produto.map(produto => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='font'>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2" className='font' >
                  {produto.nomeProduto}
                </Typography>
                <Typography variant="h5" component="h2" className='font' >
                  R$: {produto.preco}
                </Typography>
                <Typography variant="h5" component="h2" className='font' >
                 Qtd: {produto.quantidade}
                </Typography>
                <Typography variant="body2" component="p" className='font' >
                  {produto.descricaoProduto}
                </Typography>
                <Typography variant="body2" component="p" className='font' >
                  {produto.categoria?.nomeCategoria}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className= "botoes ,marginLeft , font" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' className= "botoes1 , font " >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaProduto;