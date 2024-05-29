let express = require(`express`);
let app = express();
let port = 3005;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});


// Настройка CORS
let cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));


// Настройка POST-запроса — JSON
app.use(express.json());
app.use(express.static("public"));

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Wiki_DarkSouls');

if (mongoose.connect('mongodb://127.0.0.1:27017/Wiki_DarkSouls')) {
    console.log(`ПОДКЛЮЧЕН и ЖИВУ`)
}


let forumScheam = new mongoose.Schema({
    title: String,
    descript: String,
    tech_info: String
}
);

let Forum = mongoose.model('collection_forum', forumScheam);

app.get('/forum', async function (req, res) {
    let forum = await Forum.find();
    res.status(200).send(forum);
});

// IMCL - Item/Magic/Character/Location

let imclScheam = new mongoose.Schema({
    title: String,
    category: String,
    type: String,
    updeta: String,
    requirement: Array
})

let Item = mongoose.model('item', imclScheam);
let Magic = mongoose.model('magic', imclScheam);
let Location = mongoose.model('location', imclScheam);
let Character = mongoose.model('character', imclScheam);

app.get('/item', async function (req, res) {
    let item = await Item.find();
    res.status(200).send(item)
})

app.get('/magic', async function (req, res) {
    let magic = await Magic.find();
    res.status(200).send(magic)
})

app.get('/location', async function (req, res) {
    let location = await Location.find();
    res.status(200).send(location)
})

app.get('/character', async function (req, res) {
    let character = await Character.find();
    res.status(200).send(character)
})

// карточка подробная информация

app.get('/item/card', async function (req, res) {
    let title = req.query.title;
    let card = await Item.find({ 'title': title });
    res.status(200).send(card)
})

app.get('/magic/card', async function (req, res) {
    let title = req.query.title;
    let card = await Magic.find({ 'title': title });
    res.status(200).send(card)
})

app.get('/location/card', async function (req, res) {
    let title = req.query.title;
    let card = await Location.find({ 'title': title });
    res.status(200).send(card)
})

app.get('/character/card', async function (req, res) {
    let title = req.query.title;
    let card = await Character.find({ 'title': title });
    res.status(200).send(card)
})


