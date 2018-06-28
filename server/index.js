const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const messagesCtrl = require("./controllers/messagesCtrl");
const port = 3000;

app.use(express.static(`./public/build`));
app.use(bodyParser.json());

app.post("/api/messages", messagesCtrl.create);
app.get("/api/messages", messagesCtrl.read);
app.put(`/api/messages/:id`, messagesCtrl.update);
app.delete("/api/messages/:id", messagesCtrl.delete);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
