import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadImage } from '../actions';
import { Button, Form, Message } from 'semantic-ui-react';

class Upload extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            imageurl: '',
            error: true,
            submitted: false
        };
    }

    handleChange(e){
        if(!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)/.test(this.state.imageurl) && this.state.submitted){
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        this.setState({ submitted: true });
        e.preventDefault();
        if(this.state.error) return;

        this.props.uploadImage(this.state.imageurl);
    }

    render() {
        return <div className="container">
            <div className="row title center-xs">
                Upload Meme
            </div>
            <Form onSubmit={this.handleSubmit} error={this.state.error}>
                <Form.Field>
                    <label>Image Link (a working url of the meme you want to upload)</label>
                    <input placeholder='https://example.com/meme.jpg'
                        name="imageurl"
                        value={this.state.password}
                        onChange={this.handleChange}/>
                </Form.Field>
                {this.state.error && this.state.submitted &&
                    <Message
                    error
                    header='Invalid Url'
                    content='Please enter a valid image url.'
                />}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    }
}

function mapStateToProps(state){
    return { 
    };
}

export default connect(mapStateToProps, { uploadImage })(Upload);
