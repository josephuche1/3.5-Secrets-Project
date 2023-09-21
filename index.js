import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
let port = 3000;
let expected = "ILoveProgramming"

app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("tiny"));

app.post("/check", (req,res) => {
    if(req.body["password"] == expected){
        console.log("success")
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        console.log("fail");
        res.redirect("/");
    }
})

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening to server ${port}`);
})