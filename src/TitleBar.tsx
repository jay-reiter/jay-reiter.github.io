import github_png from './assets/icons/github.png'
import linkedin_png from './assets/icons/linkedin.png'
import profile_pic from './assets/pictures/profile_pic.png'

function TitleBar () {
    return (
        <div id="title_bar">
          <div id="info">
              <div>
                  <h1 className="info">Jay Reiter</h1>
              </div>
              <div>
                    <h2 className="info">
                      Hello! I'm a Math and Computer Science student at UIUC. I built this website to
                      show you some of the projects I'm working on and stuff I'm interested in.
                    </h2>
              </div>
              <div>
                  <ul className="contacts">
                      <li className="contacts">
                            <a className="classic_link">
                                jayr2@illinois.edu
                            </a>
                        </li>
                      <li className="contacts">
                          <a className="classic_link">
                              (630) 487-0193
                              </a>
                    </li>
                  </ul>
              </div>
              <br />
              <div id="button" style={{clear: "left"}}>
                  <a href="resume.pdf" target="_blank">
                      Resume
                  </a>
              </div>
          </div>
          
          <div id="icons">
            <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                <img src={profile_pic} alt="My Picture" style={{width: "70%"}} title="Me!"/>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <a href="https://github.com/jay-reiter" target="_blank">
                            <img src={github_png} alt="My Github!" className="link_icon" title="My Github" />
                </a>
                <a href="https://www.linkedin.com/in/jayreiter1/" target="_blank">
                    <img src={linkedin_png} alt="My Linkedin!" className="link_icon" title="My LinkedIn" />
                </a>
            </div>
          </div>
        </div>
    );
}

export default TitleBar;