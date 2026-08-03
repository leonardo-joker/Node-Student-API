import express from 'express';
import controllers from './controller.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/createStudent', controllers.createStudent);

app.get('/allStudents', controllers.getStudents);

app.get('/findStudent/:id', controllers.findAStudent);

app.put('/updateStudent/:id', controllers.updateAStudent);

app.patch('/editStudent/:id', controllers.editAStudent);

app.delete('/deleteStudent/:id', controllers.deleteAStudent);

app.listen(port, () => {
  console.log(`server is runnng at port ${port}`);
});
