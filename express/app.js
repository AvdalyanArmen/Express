const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const routerForUsers = require("./routes/usersRouter.js");

const routerForBooks = require("./routes/bookRouter.js");

app.use(express.json());
app.use(routerForUsers);
app.use(routerForBooks);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`some error: ${err}`);
  } else {
    console.log(`server started on port ${PORT}`);
  }
});
