import React, { useState } from 'react'; // Importa React e o hook useState

// Define o componente Login que recebe uma função onLogin como prop
const Login = ({ onLogin }) => {
    // Define estados para email e senha, ambos inicialmente vazios
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função que é chamada quando o formulário é enviado
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        onLogin({ email, password }); // Chama a função onLogin com os valores de email e senha
    };

    return (
        // Formulário que chama handleSubmit quando enviado
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Email:
                <input
                    type="email" // Campo de entrada para email
                    value={email} // Valor do campo é o estado email
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado email quando o valor muda
                    required // Campo obrigatório
                />
            </label>
            <label>
                Password:
                <input
                    type="password" // Campo de entrada para senha
                    value={password} // Valor do campo é o estado password
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password quando o valor muda
                    required // Campo obrigatório
                />
            </label>
            <button type="submit">Login</button> // Botão para enviar o formulário
        </form>
    );
};

export default Login; // Exporta o componente Login como padrão
