const express = require('express');
const app = express();
const port = 3000;
const { sequelize } = require('./connection');
const { Post } = require('./models');
var cors = require('cors');

app.use(express.json(), cors());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/postList', async (req, res) => {
  try {
    const posts = await Post.findAll()
    return res.json( posts );
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const name = req.body?.name;
    const text = req.body?.text;

    if (!name || !text) {
      return res.status(400).json({ message: 'Bad request, name or text not found' });
    }
    const save = await Post.create({
      name,
      text
    });
    return res.status(201).json({ post: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/deletePost', async (req, res) => {
  try {
    const name = req.body?.name;

    if (!name) {
      return res.status(400).json({ message: 'Bad request, name or text not found' });
    }
    const save = await Post.destroy({
      where: { name: name}
    });
    return res.status(201).json({});
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Sync models');
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });