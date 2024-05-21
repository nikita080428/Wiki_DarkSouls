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

