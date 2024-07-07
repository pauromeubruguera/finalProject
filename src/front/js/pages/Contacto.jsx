import React, { useState } from "react";
import contactoImageUrl from "../../img/foto-contacto.png";

export const Contacto = () => {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
		event.preventDefault();
		const dataToSend = {
			name: name,
			lastName: lastName,
			email: email,
			message: message
		}
	}

    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-xsm-12 col-sm-10 col-md-9 col-lg-9">
                    <div className="d-flex justify-content-center">
                        <h2 className="red-color">Contacto</h2>
                    </div>
                    <div className="form-container">
                        <div className="w-40">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-label red-color">Nombre</label>
                                    <input type="text" className="form-control" id="inputName"
                                        value={name} onChange={(event) => setName(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputContactEmail" className="form-label red-color">Email</label>
                                    <input type="email" className="form-control" id="inputContactEmail" aria-describedby="emailHelp"
                                        value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputMessage" className="form-label red-color">Mensaje</label>
                                    <textarea type="text" className="form-control" id="inputMessage" aria-describedby="messageHelp" rows="2"
                                        value={message} onChange={(event) => setMessage(event.target.value)} ></textarea>

                                </div>
                                <button type="submit" className="btn-custom send-button red-background mb-2">Enviar</button>
                            </form>
                        </div>
                    </div>
                
            </div>
        </div>
        </div>
        </>
    )
}