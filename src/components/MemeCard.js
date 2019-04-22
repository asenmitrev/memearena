import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Image } from 'semantic-ui-react';

class MemeCard extends Component {
    render() {
        const postedOn = moment(this.props.meme.postedOn).format('D MMM YYYY')
        return (
            <Link to={'/memes/' + this.props.meme._id}>
                <Card fluid>
                    <Image src={this.props.meme.link} fluid/>
                    <Card.Content>
                        <Card.Header>Rank {this.props.meme.rank}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Posted on {postedOn}</span>
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </Link>
        );
    }
}

export default MemeCard;