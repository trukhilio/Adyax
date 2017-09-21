import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '../button/index';

class ItemForm  extends Component{
    render(){
        const { handleSubmit, cancelItemRequest } = this.props;
        const lessMoreThan = (min, max, fieldName) =>
            (value, previousValue, allValues) =>
                (value < max && value > min) ? value : previousValue;
        return (
            <form onSubmit={ handleSubmit }>
                <label htmlFor="Item creator">Item creator</label>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field name="title" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="subtitle">Subtitle</label>
                    <Field name="subtitle" component="textarea" type="text"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Field
                        name="price"
                        component="input"
                        type="number"
                        parse={value => Number(value)}
                        normalize={lessMoreThan(-1,Infinity)}
                    />
                </div>
                <div>
                    <label htmlFor="minQnt">Minimum quantity</label>
                    <Field
                        name="minQnt"
                        component="input"
                        type="number"
                        parse={value => Number(value)}
                        normalize={lessMoreThan(-1,100)}
                    />
                </div>
                <div>
                    <label htmlFor="maxQnt">Maximum quantity</label>
                    <Field
                        name="maxQnt"
                        component="input"
                        type="number"
                        parse={value => Number(value)}
                        normalize={lessMoreThan(-1,100)}
                    />
                </div>
                <Button
                    type='submit'>
                    Save
                </Button>
                <Button
                    type="button"
                    onClick={cancelItemRequest}>
                    Cancel
                </Button>
            </form>
        )
    }
}

ItemForm = reduxForm({
    form: 'item',
})(ItemForm);

export default ItemForm;

ItemForm.propTypes={
    cancelItemRequest: PropTypes.func.isRequired
};