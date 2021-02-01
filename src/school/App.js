import React, { Component } from 'react';
import './App.css';
import { ImgWithShortText, Top } from '../components';
import logoLight from "../assets/logo/logo_light.png";
import logoDark from "../assets/logo/logo_dark.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {contents: contents};
  }
  render() {
    const contents = this.state.contents.map(content => 
      <ImgWithShortText key={content.period} desc={content.desc} pics={content.pics} />
    );
    return (
      <div className="index">
        <Top logo={logoLight || logoDark} />
        <div className="contents">
          {contents}
        </div>
      </div>
    );
  }
}

const contents = [
  {
    period: 'primarySchool',
    desc: '泥埠桥完小：坐落于湖南益阳的一个小镇，是我从小长大的地方。',
    pics: ['primaryschool/0.jpg']
  },
  {
    period: 'middleSchool',
    desc: '东坪中学：我们镇上的一所中学；初中时光几乎改变了我的性格。',
    pics: [
      'middleschool/0.jpeg',
      'middleschool/1.jpg',
      'middleschool/2.jpeg',
    ]
  },
  {
    period: 'highSchool',
    desc: '周南中学：《诗经 周南》，听说是学校命名的来源。',
    pics: [
      'highschool/0.jpg',
      'highschool/1.jpg',
      'highschool/2.jpg',
      'highschool/3.jpg',
      'highschool/4.jpg',
      'highschool/5.jpg',
      'highschool/6.jpg',
      'highschool/7.jpg',
      'highschool/8.jpg',
      'highschool/9.jpg',
    ]
  },
  {
    period: 'scu',
    desc: '四川大学：位于成都，现在江安和望江之间的地铁终于通啦！',
    pics: [
      'scu/0.jpg',
      'scu/1.jpg',
      'scu/2.jpg',
      'scu/3.jpg',
    ]
  },
];
export default App;
