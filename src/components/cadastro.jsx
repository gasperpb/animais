import { useState } from "react";
import { TextField, Checkbox, FormControlLabel, Select, MenuItem, Button } from "@mui/material";

function CadastroAnimais() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [especie, setEspecie] = useState("");
    const [idade, setIdade] = useState("");
    const [sexo, setSexo] = useState("");
    const [castrado, setCastrado] = useState(false);
    const [vacinado, setVacinado] = useState(false);
    const [descricao, setDescricao] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { nome, email, especie, idade, sexo, castrado, vacinado, descricao };
        fetch("/api/cadastrar-animal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <TextField
                label="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Select
                label="Espécie"
                value={especie}
                onChange={(event) => setEspecie(event.target.value)}
            >
                <MenuItem value="Cachorro">Cachorro</MenuItem>
                <MenuItem value="Gato">Gato</MenuItem>
                <MenuItem value="Pássaro">Pássaro</MenuItem>
                <MenuItem value="Outros">Outros</MenuItem>
            </Select>
            <TextField
                label="Idade"
                value={idade}
                onChange={(event) => setIdade(event.target.value)}
            />
            <Select
                label="Sexo"
                value={sexo}
                onChange={(event) => setSexo(event.target.value)}
            >
                <MenuItem value="Macho">Macho</MenuItem>
                <MenuItem value="Fêmea">Fêmea</MenuItem>
            </Select>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={castrado}
                        onChange={(event) => setCastrado(event.target.checked)}
                    />
                }
                label="Castrado"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={vacinado}
                        onChange={(event) => setVacinado(event.target.checked)}
                    />
                }
                label="Vacinado"
            />
            <TextField
                label="Descrição"
                multiline
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
            />
            <Button type="submit">Cadastrar</Button>
        </form>
    );
}

export default CadastroAnimais
