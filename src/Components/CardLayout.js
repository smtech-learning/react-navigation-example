import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

export default class CardLayout extends Component {

    state = {
        UserProfile : []
    }
    componentWillMount() {
    const api = 'https://jsonplaceholder.typicode.com/photos';
        fetch(api).then(res=>res.json()).then((data) => this.setState({UserProfile: data}))
    }

    render() {
      
        const template = (
            this.state.UserProfile.map((data, index) => (
                
                <div>
                <Row>
                <Col sm="3">
                        <PeopleCard val={data.url}/>
                        </Col>
                        </Row>
                </div>
                ))
            )
            
        return (
      <div>
      <Container>
     {template}

      </Container>
      </div>
    )
  }
}
