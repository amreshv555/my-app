import { Component } from "react";
import './Course.css'

class Course1 extends Component {
    state = {
        courses :[
            {courseId : 1, name :'Angular', desc : 'Angular Description', startDt : '2/2/22', trainer : 'Vishal' },
            {courseId : 2, name :'React', desc : 'React Description', startDt : '1/2/22', trainer : 'Rahul' },
            {courseId : 3, name :'Java', desc : 'Java Description', startDt : '2/4/22', trainer : 'Nikita' },
            {courseId : 4, name :'Python', desc : 'Python Description', startDt : '27/2/22', trainer : 'Harika' },
            {courseId : 5, name :'C++', desc : 'C++ Description', startDt : '14/2/22', trainer : 'Ritesh' }
        ]
    }
     
 handleAdd = () => {
     console.log('add course');
     
 }
    
    render() {
        return( 
            
            <div>
                <h1>Course List Component</h1>
                <div>
                    <button onClick={this.handleAdd} className="btn btn-primary">Add</button>
                </div>
               {
                   this.state.courses.map((course)=>{
                       return<div className="card" style={cardStyle}>
                       <div className="card-body">
                         <h5 className="card-title">{course.name}</h5>
                         <p className="card-text">Trainer:{course.trainer}</p>
                         <p className="card-text">Start Date:{course.startDt}</p>
                         <p className="card-text">Desc : {course.desc}</p>
                         <button  className="btn btn-info">Add</button>
                         <button className="btn btn-warning">Remove</button>
                       </div>
                     </div>
                   })
               } 
            </div>
        );
    
    }
 }
 const cardStyle = {
    width: '18rem',
    margin : '10px',
    display : 'inline-block'
 }
export default Course1;
