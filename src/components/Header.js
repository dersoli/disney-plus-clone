import { styled } from "styled-components"
import { UserAuth } from "../context/AuthContext"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserEmail, selectUserPhoto } from "../features/user/userSlice";


const Header = (props) => {
    const dispach = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const {user, logOut} = UserAuth();

    const { googleSignIn } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch(error) {
            console.log(error)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch(error) {
            console.log(error)
        }
    }



    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a href="/">
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a href="/">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/">
                    <img src="/images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/">
                    <img src="/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a href="/">
                    <img src="/images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            {user?.displayName ? <Login onClick={handleSignOut}>Logout</Login> : <Login onClick={handleGoogleSignIn}>Login</Login>}
            
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    width: 80px;
    padding: 0;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;

            &:before{
                content: '';
                background-color: rgb(249, 249, 249);
                border-radius: 0 0 4px 4px;
                bottom: -6px;
                height: 2px;
                opacity: 0;
                position: absolute;
                right: 0;
                left: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    

    @media (max-width: 768px){
        display: none;
    }
`

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

export default Header