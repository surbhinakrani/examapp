import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import players, { deleteplayer } from './PlayerData'
import teamspoints from './Teamdata'
import AddPlayer from './Addplayer'
import EditPlayer from './Editplayer'

class Player extends Component {
    state = {
        name: '',
        score: '',
        open: false,
        isEdit: false,
        isdelete: false,
        id: 0
    }

    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    editshow = () => this.setState({ isEdit: true })
    editclose = () => this.setState({ isEdit: false, id: '' })

    btn_edit = (e) => {
        //console.log('edit id::',e)
        let v = parseInt(e, 10);
        this.setState({ id: v, isEdit: true });
    }

    btn_delete = (e) => {
        //console.log('deletd id::',e)
        let i = parseInt(e, 10);
        deleteplayer(i);
        this.setState({ isdelete: true })
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Player List</h1>
                <AddPlayer open={this.state.open} close={this.close} />
                <EditPlayer editopen={this.state.isEdit} editclose={this.editclose} id={this.state.id} />
                <Button color="olive" onClick={this.show} style={{float:"right",margin:" 12px"}}>Add Player</Button>
                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Score</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            players.map((value, k) => {
                                return (<Table.Row key={k}>
                                    <Table.Cell>{k + 1}</Table.Cell>
                                    <Table.Cell>{value.fname},{value.lname}</Table.Cell>
                                    <Table.Cell>{value.score}</Table.Cell>
                                    <Table.Cell>
                                        <Button color="olive" onClick={() => this.btn_edit(k)} value={k}>Edit</Button>
                                        <Button color="red" onClick={() => this.btn_delete(k)} value={k}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>)
                            })
                        }
                    </Table.Body>
                </Table>

                {(teamspoints) ? (
                    <div>
                        <h1 style={{textAlign:"center"}}>Team List</h1>
                        <Table fixed>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>ID</Table.HeaderCell>
                                    <Table.HeaderCell>Team Name</Table.HeaderCell>
                                    <Table.HeaderCell>Score</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    teamspoints.map((value, k) => {
                                        return (<Table.Row key={k}>
                                            <Table.Cell>{k + 1}</Table.Cell>
                                            <Table.Cell>{value.teams}</Table.Cell>
                                            <Table.Cell>{value.score}</Table.Cell>
                                        </Table.Row>)
                                    })
                                }
                            </Table.Body>
                        </Table>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Player