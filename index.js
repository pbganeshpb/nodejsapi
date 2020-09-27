const express=require('express');
const app= express();
app.use(express.json());

app.get('/',(req,res)=>{
res.send('root api');
res.end();
});
const courses=[
    {id:1, name:'AWS'},
    {id:2, name:'Azure'},
    {id:3, name:'GCP'},
]

app.get('/api/courses',(req,res)=>{
    res.send(courses);

    });

    app.get('/api/courses/:id',(req,res)=>{
        let course=courses.find(c=>c.id===parseInt(req.params.id));
        if(!course) res.status(404).send('Course id not found');
        res.send(course);
    
        });

    app.get('/api/posts/:year/:month',(req,res)=>{
       // res.send(req.params);
        res.send(req.query);
    
        });

        app.post('/api/courses',(req,res)=>{
      if(!req.body.name ||req.body.name.length<3)   
      {
          res.status(400).send('Name is required and must be minimum 3 character');
      }   
            let course = {
id:courses.length+1,
name: req.body.name
            };
            courses.push(course);
            res.send(course);
        });
    
    //PORT
   const port= process.env.PORT || 3000;
app.listen(port,console.log(`listening on port ${port}..`));