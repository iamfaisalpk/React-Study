import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Header = ()=> {
return (
    <div>
    <Button variant="primary">Primary Button</Button>
    <Button variant="danger">Danger Button</Button>
    </div>
);
}

export default Header;
