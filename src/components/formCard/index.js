import React, {Component} from 'react';
import Button from '../button/index';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../styles/newCard.scss';

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
            <form className={s.formMain}>
                <div className={s.form}>
                    <select className={s.formItem} name="selectLabel" onChange={this.handleName.bind(this)}>
                        <option value="">Select a card...</option>
                        {itemArr.map((categoryOption, index) =>
                            <option value={categoryOption.label} key={index}>
                                {categoryOption.label}
                            </option>
                        )}
                    </select>
                </div>
                <Button
                    className={s.buttonSave}
                    type='button'
                    onClick={e => {e.preventDefault();
                        addCardSave(result[0]);
                        this.clearFunc()}}>
                    Save
                </Button>
                <Button
                    className={s.buttonCancel}
                    type="button"
                    onClick={cancelCardSave}>
                    Cancel
                </Button>
            </form>
        )
    }
}

export default withStyles(s)(CardForm)