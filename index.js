import express from 'express';
import usersRoutes from './server/routes/users.js';
import countriesRoutes from './server/routes/countries.js';
import publishersRoutes from './server/routes/publishers.js';
import applicationsRoutes from './server/routes/applications.js';
import gamesRoutes from './server/routes/games.js';
import categoriesRoutes from './server/routes/categories.js';
import populationsRoutes from './server/routes/populations.js';
import regionsRoutes from './server/routes/regions.js';
import subregionsRoutes from './server/routes/subregions.js';
import storesRoutes from './server/routes/stores.js';
import manufacturersRoutes from './server/routes/manufacturers.js';
import cors from 'cors';


const app = express(); //atribuímos à const app o package express como função
const PORT = 5000; //como habitualmente o servidor corre na porta 3000, atribuímos o PORT 5000, podendo ser outro PORT, para o nosso backend
app.use(cors());

app.use(express.json());//initialize de bodyParser middleware. .json() significa que vamos utilizar dados em formato json na nossa aplicação

app.use('/users', usersRoutes);
app.use('/countries', countriesRoutes);
app.use('/publishers', publishersRoutes);
app.use('/applications', applicationsRoutes);
app.use('/games', gamesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/populations', populationsRoutes);
app.use('/regions', regionsRoutes);
app.use('/subregions', subregionsRoutes);
app.use('/stores', storesRoutes);
app.use('/manufacturers', manufacturersRoutes);
//criar o sistema de rotas
//app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));