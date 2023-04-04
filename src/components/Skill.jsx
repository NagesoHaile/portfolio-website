import React from 'react'

const Skill = () => {
  return (
    <section id="skills" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center">
                        <h2>Skills</h2>
                        <div className="line"></div>

                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '80%'}}>80%   HTML/CSS</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '55%'}}>55%   Javascript</div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '50%'}}>50%   Python</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '60%'}}>60%   Java</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar"   aria-label="Example with label" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '30%'}}>30%  C++</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar"   aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '30%'}}>70%  Reactjs</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar"   aria-label="Example with label" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '30%'}}>70% React Native</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar"   aria-label="Example with label" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '30%'}}>45%  Flutter</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="skill-item">
                    <div class="progress" role="progressbar"   aria-label="Example with label" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{width: '60%'}}>60% Django</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill
