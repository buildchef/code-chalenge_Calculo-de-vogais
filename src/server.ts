import bodyParser from "body-parser";
import express from "express";
import { environment } from "./environment";
import router from "./routes/router";

const app = express();
app.use('/api', router);
app.use(bodyParser.json);

app.listen(environment.app.port, () => {
    console.log(`Api rodando na porta ${environment.app.port}.`);
});