import React, { Component } from 'react'
import { Button, Form, Modal, Label } from 'semantic-ui-react'
import players, { editplayer } from './PlayerData'
//import players from './PlayerData'

class EditPlayer extends Component {
    state = {
        fname: '',
        lname:'',
        score: '',
        ide: '',
        isValidate: false
    }

    // show = () => this.setState({ open: true })
    // close = () => this.setState({ open: false })

    componentWillReceiveProps(nextprops) {
        if (typeof nextprops.id === 'number' || typeof nextprops.id !== 'string') {
            let p = players[nextprops.id]
            this.setState({ fname: p.fname,lname:p.lname, score: p.score, ide: nextprops.id })
        }
    }
    onhandle = () => {
        this.setState({
            fname: "",
            lname:"",
            score: ""
        });
        this.props.editclose();
    }

    isValidate = () => {
        this.setState({ isValidate: true });
    }

    btn_submit = () => {
        if (this.state.fname !== '' && this.state.lname !== '' && this.state.score !== ' ') {
            let p = { fname: this.state.fname,lname:this.state.lname, score: parseInt(this.state.score, 10) }
            editplayer(this.state.ide, p)
            this.setState({ fname: '',lname:'', score: '' })
            this.props.editclose()
        }
        else {
            this.setState({ isValidate: true });
        }

    }
    render() {
        //console.log('name::', this.state.name, "value::", this.state.score)
        return (
            <div>
                <Modal open={this.props.editopen} onClose={this.props.editclose}>
                    <Modal.Header>Edit New Player</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form size='small'>
                                <Form.Field>
                                    <Form.Input type="text" name="fname" placeholder='Player Name' onChange={(e) => this.setState({ fname: e.target.value })} value={this.state.fname} />
                                    {(this.state.isValidate === true && this.state.fname === '') ? (<Label pointing color='red'>Please enter a First name</Label>) : null}
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input type="text" name="lname" placeholder='Player Name' onChange={(e) => this.setState({ lname: e.target.value })} value={this.state.lname} />
                                    {(this.state.isValidate === true && this.state.lname === '') ? (<Label pointing color='red'>Please enter a Last name</Label>) : null}
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input type="number" name="name" placeholder='Player Score' onChange={(e) => this.setState({ score: e.target.value })} value={this.state.score} />
                                    {(this.state.isValidate === true && this.state.score === '') ? (<Label pointing color='red'>Please enter a score</Label>) : null}
                                </Form.Field>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="olive" onClick={this.btn_submit}>Edit Player</Button>
                        <Button color="grey" onClick={this.props.editclose}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default EditPlayer;
