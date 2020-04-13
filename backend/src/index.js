const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//INCLUSO CORS
app.use(cors());

// SEMPRE QUE FORMOS UTILIZAR JSON PRECISMOS INFORMAR ANTES DAS REQUISIÇÕES
// DESSA FORMA IREMOS CONSEGUIR INTERPRETAR JSON
app.use(express.json());

//UTILIZAR O ROUTER
app.use(routes);

//DEFININDO PORTA
app.listen(3333);