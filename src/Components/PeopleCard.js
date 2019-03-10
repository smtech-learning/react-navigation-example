import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  
  render (props) {
      return (
      <div>
      <Card>
      <CardImg top width="100%" src={this.props.val} alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText> Some Test</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
      </div>
    )
  }
}

export default PeopleCard;