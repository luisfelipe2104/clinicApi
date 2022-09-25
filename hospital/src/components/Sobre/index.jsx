import React from "react";
import './index.css';

function index() {
    return (
        <div className="container-sobre">
            <h1 className="titulo-sobre">Sobre</h1>
            <p>
                A nossa Clinica trabalha a partir de um sistema que registra os seus dados, exames realizados e toda e qualquer interação que o paciente tenha conosco, afim de registrar seu progresso no tratamento de qualquer enfermidade, para organização e padronização de procedimentos cada vez mais assertivos além de um maior fluxo de pacientes com um menor tempo de espera.
                O sistema é baseado em uma idealização de open health. Basicamente o paciente cria o seu registro, seja online através do nosso website ou presencialmente com auxilio das recepcionistas. Este registro vai ser preenchido conforme você for avançando com o atendimento.
                É importante ressaltar que temos uma equipe de acompanhamento e analise de desenvolvimento do seu procedimento, independente do grau de agressividade da enfermidade tratada. Essa equipe analisa cada fase do seu desenvolvimento para trazer procedimentos bem sucedidos com um grau de assertividade cada vez maior. Ainda sobre a analise desses dados, o paciente pode consultar e solicitar uma revisão de alguns dos dados que ele considerar que estão equivocados ou errados. Porém, para que haja uma mudança nesse dado, o médico deve analisar o registro do paciente e dar uma devolutiva para que o paciente saiba o porque o diagnóstico se encontra dessa forma ou para notificar que a mudança foi efetuada.
                O médico só pode manipular os dados de um paciente livremente se for confirmado que o paciente se encontra em consulta, se for solicitado pelo paciente ou se esse dado tiver sido acrescido na aplicação por parte do mesmo profissional. E mesmo assim, será emitido uma notificação ao paciente de que houve uma alteração e, nesse caso, o paciente fica responsável por confirmar essa alteração ou entrar em contato para entender o porque dessa alteração. Garantindo uma clareza maior na informação gerada através da coleta de seus dados de saúde.</p>
        </div>
    );
}

export default index;