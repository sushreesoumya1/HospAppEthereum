import React, { Component } from 'react';
import Layout from '../../components/Layout';
import MedData from '../../ethereum/MedData';
import contractInstance from '../../ethereum/contractInstance';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class ShowPatientData extends Component {

    static async getInitialProps(props) {
        
        const accounts = await web3.eth.getAccounts();
             
      const patientArray = await contractInstance.methods.getPatients().call({
        from: accounts[0]
        });
        
        console.log("ID : "+props.query.uint);
       
        const summary =  await contractInstance.methods.getPatientSummary(props.query.uint).call({
        from: accounts[0]
        });
      
        return {
            patientID: summary[0],
            name: summary[1],
            age: summary[2],
            dateOfReg: summary[3]
          
       };
    }

    renderCards() {
        const {
            patientID,
            name,
            age,
            dateOfReg

        } = this.props;
        const items = [
            {
                header:patientID,
                meta:'Patient ID',
                description:'Patient\'s unique ID'
               
            },
            {
                header:name,
                meta:'Patient\'s Name',
                description:'Name of the Patient',
                
            },
            {
                header:age,
                meta:'Patient\'s Age',
                description:'Age of the Patient'
            },
            {
                header:dateOfReg,
                meta:'Date Of Registration - ddmmyyyy',
                description:'Registration Date'
            }
        ];

        return <Card.Group items={items} />
    }
    render() {
        return (
           <Layout>
              {this.renderCards()}
            </Layout> 
        )
    }
}

export default ShowPatientData;