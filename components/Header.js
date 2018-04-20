import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import { Image } from 'semantic-ui-react';

export default () => {
  return (
    
    <Menu style={{ marginTop: '20px' }}>
    
      <Link route="/patients/new">
     
          <a className="item">+</a>
        </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Patient List</a>
        </Link>
      </Menu.Menu>
      
    </Menu>
  );
};
