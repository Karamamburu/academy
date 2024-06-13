function MainComponent() {
    return (
        <main>
            <ul className="card__frame">
                <li className="card__list">
                    <button className="card__button">
                        <img src="./markup/images/Шапка академика.svg" alt="Иконка обучения" />
                        Планы обучения
                    </button>
                </li>
                <li className="card__list">
                    <button className="card__button">
                        <img src="./markup/images/Библиотека (1).svg" alt="Иконка книг" />
                        Библиотека стандартов
                    </button>
                </li>
                <li className="card__list">
                    <button className="card__button">
                        <img src="./markup/images/Команда 1.svg" alt="Иконка команды" />
                        Команда
                    </button>
                </li>
            </ul>
            <section className="container">
                <div className="content">
                    <h4>НОВОСТЬ</h4>
                    <p>Доступно обучение на иностранных языках.</p>
                </div>
                <button>
                    <img src="./markup/images/btn.svg" alt="Кнопка подробнее" className="image-button" />
                </button>
                <div>
                    <img src="./markup/images/Ресторан 1.svg" alt="ресторан" className="image-right" />
                    <img src="./markup/images/stars.svg" alt="звезды" className="image-right2" />
                </div>
                <div className="scroll">
                    <button className="scroll_one">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.45065 4.71549C0.45065 7.12326 2.40254 9.07511 4.8103 9.07511C7.21807 9.07511 9.16992 7.12326 9.16992 4.71549C9.16992 2.30772 7.21807 0.355835 4.8103 0.355835C2.40254 0.355835 0.45065 2.30772 0.45065 4.71549Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                    </button>
                    <button className="scroll_two">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.45065 4.71549C0.45065 7.12326 2.40254 9.07511 4.8103 9.07511C7.21807 9.07511 9.16992 7.12326 9.16992 4.71549C9.16992 2.30772 7.21807 0.355835 4.8103 0.355835C2.40254 0.355835 0.45065 2.30772 0.45065 4.71549Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                    </button>
                    <button className="scroll_three">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.45065 4.71549C0.45065 7.12326 2.40254 9.07511 4.8103 9.07511C7.21807 9.07511 9.16992 7.12326 9.16992 4.71549C9.16992 2.30772 7.21807 0.355835 4.8103 0.355835C2.40254 0.355835 0.45065 2.30772 0.45065 4.71549Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                    </button>
                </div>
            </section>
            <section className="continue-learning">
                <div className="title">
                    <h2>Продолжить изучение:</h2>
                    <div className="controls">
                        <button className="prev">
                            <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0002 4.04079C30.0904 4.04079 37.4595 11.4098 37.4595 20.5C37.4595 29.5902 30.0904 36.9592 21.0002 36.9592C11.9101 36.9592 4.54102 29.5902 4.54102 20.5C4.54102 11.4098 11.9101 4.04079 21.0002 4.04079Z" stroke="#858687" stroke-width="1.37852" stroke-linejoin="bevel"/>
                                <path d="M23.9079 13.1767L15.2852 20.4999L23.9079 27.8231" stroke="#858687" stroke-width="1.38" stroke-linejoin="bevel"/>
                            </svg>
                        </button>
                        <button className="next">
                            <svg width="41" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3245 4.04079C30.4146 4.04079 37.7837 11.4098 37.7837 20.5C37.7837 29.5902 30.4146 36.9592 21.3245 36.9592C12.2343 36.9592 4.86523 29.5902 4.86523 20.5C4.86523 11.4098 12.2343 4.04079 21.3245 4.04079Z" stroke="#858687" stroke-width="1.37852" stroke-linejoin="bevel"/>
                                <path d="M17.4844 27.8234L26.1072 20.5001L17.4844 13.177" stroke="#858687" stroke-width="1.38" stroke-linejoin="bevel"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="modules-container">
                    <div className="card">
                        <img className="card1" src="./public/markup/images/card1.png" alt="Карточка 1" />
                        <div className="card-content">
                            <p className="card-role">Член команды</p>
                            <h3>RGM Академия</h3>
                            <div className="progress">
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./public/markup/images/card2.png" alt="Карточка 2" />
                        <div className="card-content">
                            <p className="card-role">ММС</p>
                            <h3>Модуль PROMO</h3>
                            <div className="progress">
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./public/markup/images/card3.png" alt="Карточка 3" />
                        <div className="card-content">
                            <p className="card-role">Директор</p>
                            <h3>Кодекс Поведения</h3>
                            <div className="progress">
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainComponent;
