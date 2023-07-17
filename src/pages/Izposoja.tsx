import "/src/css/Login.css"
import {useEffect, useState} from "react";
import axios from "axios";

const Izposoja = () => {
    const [naslov, setNaslov] = useState("");
    const [datumIzdaje, setDatumIzdaje] = useState("");

    const isbn = window.location.pathname.split("/")[2];

    const submit = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod/knjigaisbn/' + isbn );
        //console.log(res.data);
        setNaslov(res.data.knjiga_izvod_naslov);
        setDatumIzdaje(res.data.knjiga_izvod_datum_izdaje);
    }
    useEffect(()=>{submit()},[]);

    return(
        <>
            <div className="form-signin2 py-5 m-auto">
                <div className="containerIzposoja">
                    <p>Ali si želite izposoditi dano knjigo?</p>
                    <a type="button"
                       className="btn btn-sm btn-outline-secondary">Rezervacija
                    </a>
                </div>

                <a></a>

                <div className="col">
                    <div className="card shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"/>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Naslov: {naslov}</p>
                            <p className="card-text">Datum izdaje: {datumIzdaje}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Izposoja;