import React, {Component} from 'react';
import Button from "../button/index";
const srcDelete = require('../../image/delete.svg');
const srcImage = require('../../image/defaultImage.png');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../styles/card.scss';

class Card extends Component{
    render(){
        const { itemArr, index, title, subtitle, price, min, max, url, id, deleteCard, changeCard, sum, quantity} = this.props;
        return(
            <div key={index} className={s.container}>
                <img className={s.image} src={url} alt="image here"/>
                <div>
                    <h3 className={s.title}>
                        {title}
                    </h3>
                    <p className={s.subtitle}>
                        {subtitle}
                    </p>
                    <div className={s.form}>
                        <select className={s.formItem} name="selectCard" value={id} onChange={e => {e.preventDefault(); changeCard(e.target.value, index, id)}}>
                            {itemArr.map((card, index) =>
                                <option value={card.id} key={index}>
                                    {card.label}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.buttonBox}>
                    <Button
                        className={s.delete}
                        type="button"
                        onClick={e => {e.preventDefault(); deleteCard(id)}}>
                        <img src={srcDelete} alt="delete button"/>
                    </Button>
                    <div className={s.buttons}>
                        <Button
                            className={s.inc_dec}
                            type="button"
                            disabled={quantity<=min}
                            onClick={e => {e.preventDefault(); sum(-1,id)}}>
                            -
                        </Button>
                        <p className={s.quantity}>
                            {quantity}
                        </p>
                        <Button
                            className={s.inc_dec}
                            type="button"
                            disabled={quantity>=max}
                            onClick={e => {e.preventDefault(); sum(1,id)}}>
                            +
                        </Button>
                        <h3 className={s.price}>
                            {(price*quantity).toFixed( 2 )} &#8364;
                        </h3>
                    </div>
                    <p className={s.singlePrice}>
                        (price per unit - {price.toFixed( 2 )} &#8364;)
                    </p>
                </div>
            </div>
        )
    }
}

export default withStyles(s)(Card);
