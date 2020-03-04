import React, { Component } from 'react';
import './cv.jpg';

class About extends Component {
  render() {
    return(
      <div className="back">
            <img
            src= {require('./cv.jpg')}
            alt="cv"
            className="avatar-img-center"
            />
            <p className="aboutme-paragraph"> An independent, self-motivated Information Technology enthusiast and web-developer with leadership skills.
            Skills include knowledge in different web technologies, computer networking, analytical thinking and creative Proficient in
            HTML, CSS, CSS GRID, JavaScript, React, Redux, Node, Express, Python, MongoDB, SQL, Docker, GIT, Rest API, Firebase. </p>
            <p className="aboutme-paragraph">I have keen interest in Web development. Currently I  have been doing my personal project and few other as part of courses. 
            I love what I do. Every day there is something new and exciting to learn.</p>
            <p className="aboutme-paragraph">I am currently looking for full-time job in Web development that will enhance my growth rapidly as  people around me talk 
            of differences working in real projects and hobby projects!  I am looking forward to the challenges that real projects offers.</p>
        
            <p className="aboutme-paragraph">In my spare time, I am mostly in  web development community and learn from fellow members. Whether learning to code from the online courses or constantly reading blogs, 
            keeping in touch with  groups  or attending meet ups , I find myself learning something new each day and enhancing my technological knowledge.</p>
            
            <p className="aboutme-paragraph">Besides programming and studies, I love spending time with friends and can often be found together going out,  or planning a trip to near-by places.</p> 
            
            <p className="aboutme-paragraph">I am about to graduate from Turku University of Applied Sciences (TUAS) where I studied Bachelors of Engineering in Information Technology with really good grades.During my studies I worked for Firma, 
            a company under the wing of  TUAS and got to learn and hone in my skills as a developer.</p> 
            
            <p className="aboutme-paragraph">My future ambition is to grow in technological field focussing on Web development.  When I have more experience with few real world projects my other ambitions is to help other people  learn web development through a different mediums and writing
             web development articles for my website and blog about advancements in web development and modern practices. </p>
      </div>
    )
  }
}

export default About;
