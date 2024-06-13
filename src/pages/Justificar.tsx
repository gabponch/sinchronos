import React, { useState } from 'react';
import './Justificar.css';
import ComponenteMenu from '../shared/components/Menu';

const Justificativa: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
        }
    };

    const handleFileUpload = () => {
        if (!selectedFile) {
            alert('Por favor, selecione um arquivo primeiro!');
            return;
        }


        alert(`Arquivo "${selectedFile.name}" pronto para upload!`);
    };

    return (
        <div>
            <div className='barra-menu'>
                <h1>Justificativa</h1>
            <ComponenteMenu nome="menu" classe='menu' />
            </div>
            <div className="container-justify">
                <div className="date"></div>

                <div className="uploadBox">
                    <label htmlFor="fileUpload" className="uploadLabel">
                        <span className="uploadIcon">📁</span>
                        Insira aqui o arquivo
                    </label>
                    <input
                        type="file"
                        id="fileUpload"
                        onChange={handleFileChange}
                        className="input"
                    />
                    {fileName && <p className="fileName">{fileName}</p>}
                    <p className="instructions">*arquivo apenas em formato de imagem ou DOCX</p>
                    <button onClick={handleFileUpload} className="button-justify">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Justificativa;