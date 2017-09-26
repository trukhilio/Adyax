import React, {Component} from 'react';
import Button from "../button/index";
const srcDelete = require('../../image/delete.svg');
const srcImage = require('../../image/defaultImage.svg');

class Card extends Component{
    render(){
        const { itemArr, index, title, subtitle, price, min, max, url, id, deleteCard, changeCard, sum, quantity} = this.props;
        return(
            <div key={index}>
                <img src={url} alt="image here"/>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <form>
                    <select name="selectCard" value={id} onChange={e => {e.preventDefault(); changeCard(e.target.value, index, id)}}>
                        {itemArr.map((card, index) =>
                            <option value={card.id} key={index}>
                                {card.label}
                            </option>
                        )}
                    </select>
                </form>
                <Button type="button"
                        onClick={e => {e.preventDefault(); deleteCard(id)}}>
                    <img src={srcDelete} alt="delete button"/>
                </Button>
                <Button
                    type="button"
                    disabled={quantity<=min}
                    onClick={e => {e.preventDefault(); sum(-1,id)}}>
                    -
                </Button>
                <p>{quantity}</p>
                <Button
                    type="button"
                    disabled={quantity>=max}
                    onClick={e => {e.preventDefault(); sum(1,id)}}>
                    +
                </Button>
                <h3>{price*quantity} &#8364; </h3>
                <p>(price per unit - {price} &#8364;)</p>
            </div>
        )
    }
}

export default Card;
