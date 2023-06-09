import {SyntheticEvent, useState} from "react";
import axios from 'axios'
import {Navigate} from "react-router-dom";

const Register = () => {

    const[uporabniskoIme, setUporabniskoIme] = useState('');
    const[email, setEmail] = useState('');
    const[geslo, setGeslo] = useState('');
    const[geslo2, setGeslo2] = useState('');

    const [errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        if (geslo != geslo2){
            setErrorText('Gesli se ne ujemata.');
        }

        if (geslo == geslo2){
            /*const data = {
                "uporabniski_racun_uporabnisko_ime":uporabniskoIme,
                "uporabniski_racun_geslo":geslo,
                "oseba_email":email,
            };*/
            const res = await axios.post(
                'http://localhost:4545/diplomska_knjiznica/auth/register/'
                + email + "/" + uporabniskoIme + "/" + geslo);
            // console.log(res.status);
            if (res.status != 201){
                setErrorText('Napaka v registracijskih podatkih.')
            }
            if (res.status == 201){
                //redirect na login
                setRedirect(true)
            }
        }

    }

    if (redirect){
        return <Navigate to = '/login' />
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <div className="form-floating">
                        <input type="Email address" className="form-control" id="floatingInput" placeholder="name"
                               onChange={(e) => setUporabniskoIme(e.target.value)}/>
                        <label htmlFor="floatingInput">Uporabniško ime</label>
                    </div>
                    <div className="form-floating">
                        <input type="Email address" className="form-control" id="floatingInput" placeholder="surname"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">E-mail</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setGeslo(e.target.value)}/>
                        <label htmlFor="floatingPassword">Geslo</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setGeslo2(e.target.value)}/>
                        <label htmlFor="floatingPassword">Potrdi geslo</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Registracija</button>
                    <h2 className="error">{errorText}</h2>
                    <p></p>
                </form>
                <p className="h6 mb-3 fw-100">Registracija, je možna samo če ste že član knjižnice. Če še niste član se je potrebno včlaniti.</p>
            </main>
        </>
    )
}

export default Register;