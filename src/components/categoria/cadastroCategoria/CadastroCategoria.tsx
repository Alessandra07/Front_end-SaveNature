import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux'; 
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function CadastroCategoria() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: ''
    })

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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/categoria')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='text1 , font '> Cadastrar  </Typography>
                        <TextField value={categoria.nomeCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeCategoria' label='nomeCategoria' variant='outlined' name='nomeCategoria' margin='normal' fullWidth />
                        <TextField value={categoria.descricaoCategoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='descricaoCategoria' label='descricaoCategoria' variant='outlined' name='descricaoCategoria' margin='normal' fullWidth />
                <Button type="submit" variant="contained" className="botoes1 , font ">
                    Finalizar
                </Button>
                <Button type="submit" variant="contained" className="botoes , font , org  ">
                    CANCELAR
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;


