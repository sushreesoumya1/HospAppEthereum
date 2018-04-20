import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import contractInstance from '../../ethereum/contractInstance';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class NewPatient extends Component {
    state = {
        patientID: '',
        name: '',
        age:'',
        dateOfReg:'',
        loading:false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading:true  });
        try{
            const accounts = await web3.eth.getAccounts();

            await contractInstance.methods.registerPatient(
                this.state.patientID,
                this.state.name,
                this.state.age,
                this.state.dateOfReg
               
            ).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
            <h3>Add a New Patient</h3>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <Input 
                        label="Patient ID" 
                        labelPosition="left" 
                        value={this.state.patientID}
                        onChange={event => 
                            this.setState({ patientID:event.target.value })}
                    />
                    <Input 
                        label="Name" 
                        labelPosition="left" 
                        value={this.state.name}
                        onChange={event => 
                            this.setState({ name:event.target.value })}
                    />
                    <Input 
                        label="Age" 
                        labelPosition="left" 
                        value={this.state.age}
                        onChange={event => 
                            this.setState({ age:event.target.value })}
                    />
                    
                    <Input 
                        label="Date of Reg" 
                        labelPosition="left" 
                        value={this.state.dateOfReg}
                        onChange={event => 
                            this.setState({ dateOfReg:event.target.value })}
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={this.state.loading} primary>
                    Add
                </Button>
            </Form>
            </Layout>
        );
    }
}

export default NewPatient;