import React from 'react';
import './styles.css';

interface TitleProps {
    name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
    return <div> {name} </div>
}

export default Title;