const http = require('http');
const app = require('./app');
const { db, Page, User } = require('./models');
const server = http.createServer(app);

const init = async () => {
  // await Page.sync();
  // await User.sync();
  await db.sync();
  //setting up the port:
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();
