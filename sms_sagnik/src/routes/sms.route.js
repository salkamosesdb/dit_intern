const express = require('express');
const router = express.Router();

const sms = require('../controllers/sms.controller');

router.post('/student/login',sms.studentlogin);

router.get('/teacher/student/all',sms.getStudentList);

router.get('/teacher/student/marks',sms.getMarksList);

router.get('/student/dashboard',sms.studashboard);

router.get('/student/marks/:id',sms.getStudentMarks);

router.post('/teacher/login',sms.teacherlogin);

router.post('/teacher/student/add',sms.addStudent);

router.put('/teacher/student/:id/marks',sms.updatemarks);

module.exports = router;