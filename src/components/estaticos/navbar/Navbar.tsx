import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast, ToastContainer } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className='teste'>
                <Link to='/Home' className="text-decorator-none">
                    <Box className="cursor">
                        <Box >
                            <img src="https://imgur.com/GVHORhi.jpg" alt="LOGO" width={90} height={90} />
                        </Box>
                    </Box>
                </Link>

                <Box display="flex" justifyContent="start" className='direita'>
                    
                    <Link to='/Produto' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit" className='font'>
                                Produtos |
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/categoria' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit" className='font'>
                                Categorias |
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className="cursor">

                    </Box>

                    <Link to='/formularioCategoria' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit"  className='font' >
                                Cadastrar Categoria |
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/formularioProduto' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit" className='font' >
                                Cadastrar Produtos |
                            </Typography>
                        </Box>
                    </Link>

                    {/* <Link to='/Contato' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h4" color="inherit" className='font' >
                                Contato |
                            </Typography>
                        </Box>
                    </Link> */}

                    <Link to='/SobreNos' className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h4" color="inherit" className='font' >
                                Sobre Nós 
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/Login' className='direita2' >
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit" className='font' >
                                Logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;