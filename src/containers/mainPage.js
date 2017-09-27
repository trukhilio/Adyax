import React, {Component} from 'react';
const srcMain = require('../image/main.svg');
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/mainPage.scss';

class MainPage extends Component{
    render(){
        return(
            <div>
                <header className={s.pictureContainer}>
                    <img className={s.picture} src={srcMain} alt="main picture"/>
                    <text className={s.slogan}>
                        <b>
                            A Better Experience
                        </b>
                    </text>
                    <h1 className={s.header}>
                        <b>
                            Front-End Developer
                            <span>&#9632;</span>
                        </b>
                    </h1>
                    <h3 className={s.text}>
                        Adyax’s core values take top priority: we care for our client,
                        and we care for our people. Staff and clients work in partnership with consistent,
                        transparent communication.

                    </h3>
                </header>
                {this.props.children}
                <footer className={s.footer}>
                        <p className={s.footerText}>
                            Adyax specializes in working with multi-national,
                            multi-brand companies on a wide range of customer,
                            client and employee-facing solutions.
                        </p>
                </footer>
            </div>
        )
    }
}

export default withStyles(s)(MainPage);