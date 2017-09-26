import React, {Component} from 'react';
import Button from '../button/index';

class CardForm  extends Component{
    constructor(){
        super();
        this.state = {
            label:''
        };
    }
    handleName(e){
        this.setState({ label: e.target.value })
    }
    clearFunc(){
        this.setState({ label: ''})
    }
    render(){
        const { addCardSave, itemArr, cancelCardSave  } = this.props;
        let result = itemArr.filter(item => item.label === this.state.label);
        return (
            <form>
                <select name="selectLabel" onChange={this.handleName.bind(this)}>
                    <option value="">Select a card...</option>
                    {itemArr.map((categoryOption, index) =>
                        <option value={categoryOption.label} key={index}>
                            {categoryOption.label}
                        </option>
                    )}
                </select>
                <Button
                    type='button'
                    onClick={e => {e.preventDefault();
                        addCardSave(result[0]);
                        this.clearFunc()}}>
                    Save
                </Button>
                <Button
                    type="button"
                    onClick={cancelCardSave}>
                    Cancel
                </Button>
            </form>
        )
    }
}

export default CardForm