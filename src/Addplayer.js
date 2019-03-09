import React, { Component } from 'react'
import { Button, Form, Modal, Label } from 'semantic-ui-react'
import { addplayer } from './PlayerData'

class AddPlayer extends Component {
    state = {
        fname: '',
        lname: '',
        score: '',
        isValidate: false
    }
    onhandle = () => {
        this.setState({
            fname: "",
            lname: "",
            score: ""
        });
        this.props.close();
    }

    isValidate = () => {
        this.setState({ isValidate: true });
    }

    btn_submit = () => {
        if (this.state.fname !== '' && this.state.lname !== '' && this.state.score !== ' ' && (this.state.score > 0 && this.state.score <= 100)) {
            let p = { fname: this.state.fname, lname: this.state.lname, score: parseInt(this.state.score, 10) }
            addplayer(p)
            this.setState({lname:'', fname: '', score: '' ,isValidate:false})
            this.onhandle();
        }
        else {
            this.setState({ isValidate: true });
        }

    }
    render() {
        return (
            <div>
                <Modal open={this.props.open} onClose={this.props.close} centered={false}>
                    <Modal.Header>Add New Player</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form size='small'>
                                <Form.Field>
                                    <Form.Input type="text" name="fname" placeholder='Player First Name' onChange={(e) => this.setState({ fname: e.target.value })} value={this.state.fname} />
                                    {(this.state.isValidate === true && this.state.fname === '') ? (<Label pointing color='red'>Please enter a Firsy Name</Label>) : null}
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input type="text" name="lname" placeholder='Player Last Name' onChange={(e) => this.setState({ lname: e.target.value })} value={this.state.lname} />
                                    {(this.state.isValidate === true && this.state.lname === '') ? (<Label pointing color='red'>Please enter a Last Name</Label>) : null}
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input type="number" name="score" min="0" max="100" placeholder='Player Score' onChange={(e) => this.setState({ score: e.target.value })} value={this.state.score} />
                                    {(this.state.isValidate === true && this.state.score === ''  ) ? (<Label pointing color='red'>Please enter a Score</Label>) : null}
                                    {(this.state.isValidate && (this.state.score < 0 || this.state.score > 100))?(<Label pointing color='red'>Please enter a score between 0 to 100</Label>):null}
                                </Form.Field>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="olive" onClick={this.btn_submit}>Add Player</Button>
                        <Button color="grey" onClick={this.onhandle}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default AddPlayer;
