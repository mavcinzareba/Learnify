const Course = require('../models/Course');
const User = require('../models/User');

exports.createCourse = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const course = new Course({
      title,
      description,
      category,
      instructor: req.user.id
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Dodatkowe metody: updateCourse, deleteCourse, addLesson, addQuiz, etc.