import Student from './model.js';
let students = [];
let primaryID = 0;
const controllers = {
  createStudent: (req, res) => {
    try {
      const { fullName, email, department, gpa } = req.body;
      primaryID++;
      const student = new Student(primaryID, fullName, email, department, gpa);
      student.validate();
      students.push(student);
      res.status(201).json(student);
    } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message);
    }
  },

  getStudents: (req, res) => {
    try {
      res.status(200).json(students);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
  findAStudent: (req, res) => {
    try {
      console.log(req.params);
      const id = +req.params.id;
      console.log(id);
      const student = students.find((student) => student.id === id);
      if (!student) {
        res.status(400).json(`Can't find student`);
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  updateAStudent: (req, res) => {
    try {
      const { fullName, email, department, gpa } = req.body;
      const id = +req.params.id;
      const editedStudent = new Student(id, fullName, email, department, gpa);
      editedStudent.validate();
      const index = students.findIndex((student) => student.id === id);
      if (index === -1) {
        res.status(400).json(`Can't find student`);
      }
      students[index] = editedStudent;
      res.status(200).json(editedStudent);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  editAStudent: (req, res) => {
    try {
      const id = +req.params.id;
      const index = students.findIndex((student) => student.id === id);
      students[index] = { ...students[index], ...req.body };
      res.status(200).json('student updated suceesfully');
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  deleteAStudent: (req, res) => {
    try {
      const id = +req.params.id;
      // console.log(id);
      const student = students.find((student) => student.id === id);
      // console.log(student);
      if (!student) {
        res.status(400).json(`student doesn't exist`);
      }
      students = students.filter((student) => student.id !== id);
      res.status(200).json('student deleted successfully');
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};

export default controllers;
