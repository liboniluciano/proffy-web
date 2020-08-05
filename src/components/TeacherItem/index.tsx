import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import'./styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/26471185?s=460&u=bacc06ad3d9c692f64a7cbf9a11bfe9fa79c831f&v=4" alt="Luciano Liboni"/>
        <div>
          <strong>Luciano Liboni</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt 
        <br/> <br/>
        repudiandae, accusantium architecto, voluptate corporis obcaecati 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;