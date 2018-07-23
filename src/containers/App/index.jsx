import React, { Component } from 'react';

import HelloWorld from 'components/HelloWorld';
import ContactList from 'components/Contact';
import { Calculator } from 'components/Calculator';
import AppNotes from 'components/AppNotes';
import Timer from 'components/Timer';

import 'static/style/main.styl';

const _linkStyle = {
    textDecoration: 'underline'
};

export default class AppContainer extends Component {
    constructor(props) {
        super(props)

        this.articleRef = null;
        this.state = {
            article: null,
            testUpdate: 2
        }
    }

    componentDidMount() {
        setTimeout(() => {
            import('components/Article').then(component => {
                this.setState({
                    article: component.default
                })
            });
        }, 500);
    }

    render() {
        const Article = this.state.article;

        return (
            <div className='container'>
                <section id='issue1'>
                    <a
                        className='h3'
                        href='#issue1'
                        style={_linkStyle}
                    >
                        Задание 1: Сделать компонент для отображения статьи
                    </a>
                    {
                        Article ?
                        <Article
                            title='Статья про жизнь'
                            authorName='Евген'
                            ref={i => this.articleRef = i}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magnam vitae harum voluptate dolorem, alias obcaecati quas. Ipsa non, laudantium, aliquid nesciunt debitis fugiat facere suscipit, libero inventore et natus.
                        </Article>
                        :
                        ''
                    }
                </section>

                <section id='issue2'>
                    <a
                        className='h3'
                        href='#issue2'
                        style={_linkStyle}
                    >
                        Задание 2: Написать динамический Hello World.
                    </a>
                    <HelloWorld />
                </section>

                <section id='issue3'>
                    <a
                        className='h3'
                        href='#issue3'
                        style={_linkStyle}
                    >
                        Задание 3: Дополнительная информация о контактах
                    </a>
                    <ContactList />
                </section>

                <section id='issue4'>
                    <a
                        className='h3'
                        href='#issue4'
                        style={_linkStyle}
                    >
                        Задание 4: Простой калькулятор
                    </a>
                    <Calculator />
                </section>

                <hr style={{
                    height: '1px',
                    backgroundColor: '#cecece',
                    margin: '15px 0',
                    display: 'block',
                    border: 'none'
                }}
                />

                <section id='issue5'>
                    <a
                        className='h3'
                        href='#issue5'
                        style={_linkStyle}
                    >
                        Задание 5: Заметки, реализация. Сделать выбор цвета для заметки
                    </a>
                    <AppNotes />
                </section>

                <section id='issues6'>
                    <a
                        className='h3'
                        href='#issue6'
                        style={_linkStyle}
                    >
                        Задание 6: Таймер
                    </a>
                    <Timer />
                </section>
            </div>
        );
    }
}
