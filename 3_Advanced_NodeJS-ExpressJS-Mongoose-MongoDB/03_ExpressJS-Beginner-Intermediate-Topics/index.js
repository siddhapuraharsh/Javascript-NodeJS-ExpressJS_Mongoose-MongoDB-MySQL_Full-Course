// REST: REpresentational State Transfer

// Importing Modules
const express = require('express'); // return function
const app = express(); // returns object

app.use(express.json()); // returns middleware

const Joi = require('joi'); // returns class and it is used for data validation




// GET =================================================================

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const courses = [
  { id: 1, name: 'Course1' },
  { id: 2, name: 'Course2' },
  { id: 3, name: 'Course3' },
];

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/showparams/:id', (req, res) => {
  res.send(req.params);     // returns value after ':'
  // res.send(req.query);   // returns value after '?'
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // 404 error is thrown when particular resource is not found
  if (!course) return res.status(404).send(`Course with id ${req.params.id} does not exist...!!!`);
  res.send(course);
});




// POST =================================================================

app.post('/api/courses', (req, res) => {
  const courseName = req.body.name;
  if (!courseName || courseName.length<3) {
    // 400 status code is thrown when it is a Bad Request or Invalid
    return res.status(400).send('Name is required and must be at least 3 characters long...');
  } 
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(courses);
});


app.post('/api/joi/courses', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(courses);
});





// PUT =================================================================

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  return schema.validate(course);
}

app.put('/api/courses/:id', (req,res) => {

  // Look up if the course exists or not or else throw 404 error that resource does not exist
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`Course with ID: ${req.params.id} does not exist...`);

  // Validate the request parameters, else throw 400 error as Bad Request
  /** 
    const result = validateCourse(req.body);
    if (result.error) return res.status(400).send(result.error.details[0].message);
  **/
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update the course and return the course
  course.name = req.body.name;
  res.send(course);
});





// DELETE =================================================================

app.delete('/api/courses/:id', (req,res) => {
  // Look up if the course exists, else respond 404 error
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send(`Course with ID: ${req.params.id} does not exist...`)

  // Delete the course and return that course
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to PORT ${port}...`));
