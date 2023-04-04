import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
};

const HeaderWrapper = styled(AppBar)({
    background: "linear-gradient(to right, #c5ebec, #cdd7d8)",
});

const Header = () => {
    return (
        <>
            <HeaderWrapper position="static">
                <Toolbar className="navbar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pets
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Adoção
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Meus Pets
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sobre
                    </Typography>
                    <button className="login-button">Login</button>
                </Toolbar>
            </HeaderWrapper>
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <div>

                        <img src="slide1.jpg" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="./img/slide2.jpg" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="./img/slide3.jpg" alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Header;
