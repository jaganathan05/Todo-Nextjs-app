import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(
      'mongodb+srv://jaganathanv888:Jack%40888@cluster0.7zpv1uv.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const todosCollection = db.collection('Todos');
    const todos = await todosCollection.find().toArray();

    client.close();

    res.status(200).json({ todos: todos.map(todo => ({
      ...todo,
      id: todo._id.toString(),
    })) });
  }
}

export default handler;
