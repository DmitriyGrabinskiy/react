import React, { Component } from 'react';
import Aux from '../../hoc/Aux'

class Course extends Component {
    render () {
        var selectCourseStyle = {
            color: 'red',
            paddingTop: '10px'
          };


        let course = "";
        if(this.props.cource.id !== "")
        {        
            course = <div>
                <h1>{this.props.cource.title}</h1>
                <p>You selected the Course with ID: {this.props.cource.id}</p>
            </div>
        }
        else
        {
            course = <div style={ selectCourseStyle }>Please, select the course!</div>
        }

        return (
            <Aux>
                {course}
            </Aux>
        );
    }
}

export default Course;