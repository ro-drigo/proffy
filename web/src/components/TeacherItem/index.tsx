import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/62777011?s=460&u=de4d0f8c49d1ffd8116f0b015f05c5a8131d8418&v=4" alt="Rodrigo Ferreira"/>
                <div>
                    <strong>Rodrigo Ferreira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Professor de química avançada.
                <br/><br/>
                Apaixonado por explodir laboratórios e fazer experiências malucas.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;