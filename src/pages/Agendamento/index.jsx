import React from "react";
import Header from '../../components/Header'
import Agendamento from '../../components/Agendamento'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Index(props) {
    return (
        <div>
            <Header />
            <Agendamento user={props.user} />
        </div>
    );
}

export default Index;
