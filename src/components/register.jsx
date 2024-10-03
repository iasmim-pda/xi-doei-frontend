import React, { useState } from 'react'; // * Importa React e o hook useState

// * Define o componente Register que recebe uma prop onRegister
const Register = ({ onRegister }) => {
    // Define estados para email, senha e confirmação de senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //  * Função que lida com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        if (password !== confirmPassword) { // Verifica se as senhas coincidem
            alert('Passwords do not match'); // Alerta se as senhas não coincidem
            return; // Sai da função se as senhas não coincidem
        }
        onRegister({ email, password }); // Chama a função onRegister com email e senha
    };

    return (
        // Formulário que chama handleSubmit ao ser enviado
        <form onSubmit={handleSubmit}>
            <h2>Register</h2> {/* Título do formulário */}
            <label>
                Email:
                <input
                    type="email" // Campo de entrada para email
                    value={email} // Valor do campo de email
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email
                    required // Campo obrigatório
                />
            </label>
            <label>
                Password:
                <input
                    type="password" // Campo de entrada para senha
                    value={password} // Valor do campo de senha
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado de senha
                    required // Campo obrigatório
                />
            </label>
            <label>
                Confirm Password:
                <input
                    type="password" // Campo de entrada para confirmação de senha
                    value={confirmPassword} // Valor do campo de confirmação de senha
                    onChange={(e) => setConfirmPassword(e.target.value)} // Atualiza o estado de confirmação de senha
                    required // Campo obrigatório
                />
            </label>
            <button type="submit">Register</button> {/* Botão de envio do formulário */}
        </form>
    );
};

export default Register; // Exporta o componente Register como padrão
