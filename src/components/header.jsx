import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import CadastroAnimais from "./CadastroAnimais";

function Header() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mapa
                    </Typography> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ong
                    </Typography> <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Sobre
                    </Typography>
                    <Button color="inherit" onClick={handleOpen}>
                        Cadastrar animal
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cadastro de animal</DialogTitle>
                <DialogContent>
                    <CadastroAnimais />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Header;
