import React, { Component } from 'react';
import './App.css';
import { Top } from '../components'
import meAvatar from "../assets/index/me_avatar.jpg";
import logoLight from "../assets/logo/logo_light.png";
import logoDark from "../assets/logo/logo_dark.png";

class App extends Component {
  render() {
    return (
      <div className="index">
        <Top logo={logoLight || logoDark} />
        <div className="contents">
          <div className="me">
            <img className="me-avatar" src={meAvatar} alt="me_avatar" />
            <div className="me-info">
              <p>AYing</p>
              <p>21 Years Old</p>
              <p>Student & FE Developer</p>
              <p>Hunan China</p>
              <p>SCU</p>
              <p>《盛夏的果实》—— 莫文蔚</p>
            </div>
          </div>
          <div className="directory">
            <a href="school.html" className="directory-a" title="学习经历">school</a>
            <a href="coffee.html" className="directory-a" title="咖啡相关">coffee</a>
            <a href="ukulele.html" className="directory-a" title="尤克里里相关">ukulele</a>
            <a href="friends.html" className="directory-a" title="我的朋友们">friends</a>
            <a href="somethingInteresting.html" className="directory-a" title="一些有趣的事情">something Interesting</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
