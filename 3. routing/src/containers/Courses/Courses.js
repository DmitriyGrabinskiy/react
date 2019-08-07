import React, { Component } from 'react';

import './Courses.css';
import Cource from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCource : {
            id: "",
            title: ""
        }
    }

    courceSelectedHandler = (courceId) => {
        let courses = [];
        for (let key in this.state.courses) {
            courses.push({
                ...this.state.courses[key]
            });
        }
        const selectedCource = courses.filter((course)=> course.id == courceId)[0];
        if(this.state.selectedCource.id !== selectedCource.id)
        {
            this.setState({ selectedCource: selectedCource })
        }
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article 
                            className="Course" 
                            key={course.id}
                            onClick={()=> this.courceSelectedHandler(course.id)}>
                                {course.title}
                            </article>;
                        } )
                    }
                </section>
                <Cource cource={this.state.selectedCource} />
            </div>
        );
    }
}

export default Courses;