import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <AppBar position="static">
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
                <div className="search-container">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="search"
                        onClick={handleSearchClick}
                        sx={{ mr: 2 }}
                    >
                        <SearchIcon />
                    </IconButton>
                    {isSearchOpen && (
                        <InputBase
                            placeholder="Pesquisar..."
                            inputProps={{ "aria-label": "search" }}
                        />
                    )}
                </div>
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
        </AppBar>
    );
}
