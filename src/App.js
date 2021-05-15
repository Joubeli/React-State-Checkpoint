import React, { Component } from 'react';
import {Nav,Card} from 'react-bootstrap';
import './style.css'
import click from './click.gif'

class state extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "Imen Joubeli (Bou Ali)",
      bio: `My name is Imen Joubeli and I am a full-stack Web
      Application Developer and Software Developer, currently living in Tunisia. 
      I have a Bachelor degree in Computer Science from the higher institute of 
      economical and commercial science of tunis, and a master degree in Data Science for Business.
      My primary focus and inspiration for my studies is Web Development`,
      imgSrc: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/53034423_1144733872367490_5120841089854472192_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JcKR9lWkKlMAX8rHDE4&_nc_ht=scontent.ftun1-2.fna&oh=da08d0b9cb0f6745d603e1831c9a455c&oe=60C52DD3',
      profession: 'Full-Stack web developer',
      showHide: false
    };
    this.hideComponent = this.hideComponent.bind(this);
    
  }

  hideComponent() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    const {fullName,bio,imgSrc,profession,showHide} = this.state;
    
    return (
      <>
       <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#second" disabled>
                My Work
        </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
      </Card>
      
      <div className='main'>
      <input type="image" src={click} alt='click' onClick={() => this.hideComponent()}></input>
        {showHide && <div className='profile'>
          <img className='img' src={imgSrc} alt='photo1'/>
            <h4>{fullName}</h4>
            <p className='par'>{bio}</p>
            <h5>{profession}</h5>
            
            </div>}
            </div>

      </>

    );
  }
}

export default state;