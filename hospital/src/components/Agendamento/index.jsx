import './index.css';

function index() {
    return (
        <div className='app'>
            <div className="titulos">
                <h1>Agende sua consulta!</h1>
                <h1>Selecione a forma de atendimento: </h1>
            </div>

            <div className="container">

                <label>Informe a sua cidade: </label>
                <input className='input' type="text" />

                <label>Informe a especialidade médica: </label>
                <input className='input' type="text" />

                <label>Informe a data e hora que em que deseja ser atendido: </label>
                <input className='input' type="text" />

                <label> Informe o motivo da consulta: </label>
                <input className='inputDiferente' type="text" />

                <input className='botao' type="button" value="Marcar consulta" />

            </div>


        </div>
    );
}

export default index;
