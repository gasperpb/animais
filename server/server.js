const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/api/cadastrar-animal", (req, res) => {
  const data = req.body;
  fs.readFile("animais.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro ao ler arquivo.");
      return;
    }
    let animais = [];
    if (jsonString) {
      animais = JSON.parse(jsonString);
    }
    animais.push(data);
    const jsonStringNova = JSON.stringify(animais, null, 2);
    fs.writeFile("animais.json", jsonStringNova, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erro ao salvar arquivo.");
        return;
      }
      res.send("Cadastro realizado com sucesso.");
    });
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});
