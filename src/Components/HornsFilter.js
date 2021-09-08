import React, { Component } from 'react'
import { Form, FloatingLabel} from 'react-bootstrap'

class HornsFilter extends Component {
    render() {
        return (
            <div>
            <Form className="formstyle">
                <FloatingLabel controlId="floatingSelect" label="Filter by Numbers of Horns">
                    <Form.Select  onChange={(event)=>{this.props.handleChange(event,event.target.value ); console.log(event.target.value)}}>
                  
                        <option>Select Number</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Hundred</option>
                    </Form.Select>
                </FloatingLabel>
               
                </Form>

            </div>
            
        )
        
    }
}

export default HornsFilter
