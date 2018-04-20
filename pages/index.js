import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

import contractInstance from '../ethereum/contractInstance';


class PatientData extends Component {
  static async getInitialProps() {
    const patients = await contractInstance.methods.getPatients().call();

    return { patients };
  }
  
 
  renderPatients() {
    const items =  this.props.patients.map(uint => {
      return {
        header: uint,
        description: 
        (
          <Link route={`/patients/${uint}`}>
            <a>View patient's data</a>
          </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return <div>{this.renderPatients()}</div>
  }


  render() {
    return (
      
      <Layout>
        <h3>Registered Patients</h3>
        <div>
          {this.renderPatients()}
        </div>
      </Layout>
    );
  }
}

export default PatientData;

//}
