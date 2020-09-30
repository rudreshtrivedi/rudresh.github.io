import React, {Component} from "react";
class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist"
                                         aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree
                                                        of Computer Science
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>I graduated from <strong><a target={"_blank"}
                                                                                   rel="noopener noreferrer"
                                                                                   href={"https://www.pec.ac.in/"}>Punjab
                                                        Engineering College, Chandigarh</a></strong> with a CGPA of <strong>9.50/10</strong>.</p>
                                                    <p>During these years, I got involved with many organizations and
                                                        performed a lot of activities</p>
                                                    <ul>
                                                        <li>PEC ACM Student Chapter: <strong>Student
                                                            Chairperson</strong></li>
                                                        <li>IEEE: <strong>Member</strong></li>
                                                        <li>Student Affairs Council: <strong>Member</strong></li>
                                                        <li>Class Representative</li>
                                                        <li>Hostel Senior</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFive">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseFive"
                                                       aria-expanded="false" aria-controls="collapseFive">High School
                                                        Secondary Education
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingFive">
                                                <div className="panel-body">
                                                    <p>I did my schooling from <strong><a target={"_blank"}
                                                                                          rel="noopener noreferrer"
                                                                                          href={"https://atamschoolldh.com/"}>Atam
                                                        Public Senior Secondary School, Ludhiana</a></strong> with a score of <strong>98.22%</strong>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Education;