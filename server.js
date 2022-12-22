import express, { query } from "express";
import faker from 'faker';

faker.locale = "es"


const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/test', (req, res) => {

    const cant = req.query.cant
    res.send(data(cant))

})


function data(cant) {
    const { name, internet } = faker
    const arrayAux = []

    const cantidad = cant || 10

    for (let index = 0; index < cantidad; index++) {
        const objeto = { id: index + 1, nombre: name.firstName() }


        arrayAux.push(objeto)

    }
    return arrayAux


}


app.listen(PORT, () => {
    console.log(`todo bien el http://localhost:${PORT}`);
});

//para probar la cant deseada: http://localhost:8080/test?cant=100000
