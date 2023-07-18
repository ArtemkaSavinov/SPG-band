let express = require(`express`);
let app = express();
let port = 3003;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

let cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/SPG-band");

let artistSchema = new mongoose.Schema({
    name: String,
    instument: String,
    class: Number,
    image: String,
});

let Artist = mongoose.model("artist", artistSchema);

let bandsSchema = new mongoose.Schema({
    name: String,
    image: String,
});

let Band = mongoose.model("band", bandsSchema);

let librarySchema = new mongoose.Schema({
    name: String,
    date: String,
});

let Library = mongoose.model("library", librarySchema);

let historySchema = new mongoose.Schema({
    history: String,
    author: String,
});

let History = mongoose.model("histories", historySchema);

let songSchema = new mongoose.Schema({
    name: String,
    description: String,
    link: String,
});

let Song = mongoose.model('song', songSchema)

app.get("/artists", async function (req, res) {});

app.get("/bands", async function (req, res) {
    let friends = await Band.find();
    res.send(friends);
});

app.get("/library", async function (req, res) {
    let library = await Library.find();
    res.send(library);
});

app.get("/history", async function (req, res) {
    let history = await History.find();
    res.send(history);
});

app.get("/band", async function (req, res) {
    let classNumber = req.query.classNumber;
    let band = await Artist.find({ class: classNumber }).sort();
    res.send(band);
});

app.get('/song', async function (req, res){
    let name = req.query.name;
    let song = await Song.find({name: name})
    res.send(song)
})