var cors = require("cors");
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config({ path: "./config.env" });

const uri: string = <string>process.env.DATABASE;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((err: any) => {
        console.log("conectado no MarcosDB");
    });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to NodeJs App using TypeScript");
});

const PORT: number = parseInt(<string>process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
    console.log(`consolando a porta ${PORT}`);
});
