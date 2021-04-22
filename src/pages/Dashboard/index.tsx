import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/img/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/48933391?v=4"
                        alt="Gabriel Nascimento"
                    />
                    <div>
                        <strong>project-react/typescript</strong>
                        <p>
                            Easy project to start programming with typescript on
                            react
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
