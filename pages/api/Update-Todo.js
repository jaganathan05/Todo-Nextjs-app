import { MongoClient, ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'PATCH') {
    const { id, completed } = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://jaganathanv888:Jack%40888@cluster0.7zpv1uv.mongodb.net/Todos?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();
    const todosCollection = db.collection('Todos');

    try {
      const result = await todosCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { completed: completed } }
      );

      client.close();

      if (result.matchedCount > 0) {
        res.status(200).json({ message: 'Todo updated!', result });
      } else {
        res.status(404).json({ message: 'Todo not found.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
