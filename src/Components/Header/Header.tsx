import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { scrollTo } from "../../functions/scrollTo";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import "./Header.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { UserInterface } from "../../model/UserInterface";
import { users } from "../../Service/UserDetails";

const style = {
    position: 'absolute' as 'absolute',
    displey: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    // height: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 6,
};

function Header(): JSX.Element {
    const { register, handleSubmit } = useForm<UserInterface>()
    const favoriteSelector = useSelector((state: any) => state.favorite.values);
    // const usersSelector = useSelector((state: any) => state.users);
    // const dispatch = useDispatch()
    // console.log(usersSelector);
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function toastMess() {
        toast.success('Logged In...', {
            position: toast.POSITION.TOP_CENTER,
            className: 'discoverToast',
            theme: "colored",
            closeOnClick: true,
            draggable: true,
            pauseOnHover: false,
        })
    }

    function checkIfSignIn(name:any){
        
    }
      


    return (
        <div className="Header">
            <NavLink to={'/'}>
                <div onClick={() => scrollTo.scrollTo()} className="Header_Headings">
                    <h1>Needs</h1>
                </div>
            </NavLink>

            <div className="Header_NavBar">
                <div className="Header_NavBar_div">
                    <NavLink to={'/'}>

                        <HomeIcon fontSize="medium" />
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className="Header_NavBar_div">
                    <NavLink to={'/movies'}>
                        <MovieIcon fontSize="medium" />
                        <span>Movies</span>
                    </NavLink>
                </div>
                <div className="Header_NavBar_div">
                    <NavLink to={'/tv'}>
                        <TvIcon fontSize="medium" />
                        <span>Tv Shows</span>
                    </NavLink>
                </div>
                {favoriteSelector.length !== 0 ?
                    <div className="Header_NavBar_div">
                        <NavLink to={'/fav'}>
                            <FavoriteIcon fontSize="medium" />
                            <span>Favorite</span>
                        </NavLink>
                    </div>
                    : <></>}
            </div>
            <div className="Header_Log">
                <Avatar className="AvatarLogo" onClick={handleOpen}>I</Avatar>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Sign In
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit(checkIfSignIn)}>
                                <input placeholder="Username" type="text" {...register('username')} /> <br />
                                <input placeholder="Password" type="text" {...register('password')} /> <br />
                                <button>Sign In</button>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}
export default Header;
