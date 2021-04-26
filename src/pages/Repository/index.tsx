import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/img/logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/dashboard">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars.githubusercontent.com/u/48933391?v=4"
                        alt="userPhoto"
                    />
                    <div>
                        <strong>rocketseta/unform</strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1080</strong>
                        <span>Starts</span>
                    </li>
                    <li>
                        <strong>1080</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1080</strong>
                        <span>Open Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="sisiushuis">
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
