import React, { Component } from 'react';
import ItemForm from '../components/formItem/index';
import Button from '../components/button/index';

class Form extends Component{
    render(){
        const { addNewItem, addItemRequest, addItemSuccess, cancelItemRequest } = this.props;
        return(
            <div>
                { addNewItem ?
                    <ItemForm
                        cancelItemRequest={cancelItemRequest}
                        onSubmit={addItemSuccess}
                    />
                    :
                    <Button
                        onClick={addItemRequest}
                    >
                        Add new item
                    </Button>
                }
            </div>
        )
    }
}

export default Form;
