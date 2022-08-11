import React, { useState } from "react";
import "./index.css"

const AreaInputs = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [mensagem, setMensagem] = useState('');

    function calcularImc(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);
        
        if(imc < 18.6 ){
            setMensagem("Você está abaixo do peso! Seu IMC é de: " + imc.toFixed(2));
        } else if (imc >= 18.6 && imc < 24.9){
            setMensagem("Você está no peso ideal! Seu IMC é de: " + imc.toFixed(2));
        } else if(imc >= 24.9 && imc < 34.9){
            setMensagem("Você está um pouco acima do peso! Seu IMC é de: " + imc.toFixed(2));
        } else {
            setMensagem("Obesidade! Seu IMC é de " + imc.toFixed(2));
        }
    }

    return(
        <>
            <label htmlFor="peso">Peso: <input type="text" id="peso" placeholder="Peso em (kg) Ex. 70" value={peso} onChange={(e) => setPeso(e.target.value)}/></label>
            <label htmlFor="altura">Altura: <input type="text" id="altura" placeholder="Altura em (cm) Ex. 170" value={altura} onChange={(e) => setAltura(e.target.value)}/></label>
            <button onClick={calcularImc}>Calcular</button>
            <h2>{mensagem}</h2>
        </>
    );
}

export default AreaInputs;