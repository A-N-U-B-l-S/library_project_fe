import {useNavigate} from "react-router-dom";

const Card = ({cardData}) => {

    const navigation = useNavigate();

    const toIzposoja = () => {
        navigation(`/izposoja/${cardData.knjiga_izvod_isbn}`);
        //console.log(cardData)
        //knjiga.map((cards:any)=>{null})
    }


    /*const handleIzposojaClick1 = () => {
        const { knjiga_izvod_naslov, knjiga_izvod_isbn } = cardData;
        //navigation(`/izposoja/${knjiga_izvod_naslov}/${knjiga_izvod_isbn}`);
        navigations(`/izposoja?naslov=${knjiga_izvod_naslov}&isbn=${knjiga_izvod_isbn}`);
    };*/

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"/>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">{cardData.knjiga_izvod_naslov}</p>
                        <div className="btn-group">
                            <div className="btn-group1">
                                <div>
                                    <a type="button"
                                       className="btn btn-sm btn-outline-secondary"
                                        onClick={toIzposoja}>Izposoja
                                    </a>
                                </div>
                                <div>
                                    <a href="/rezervacija" type="button"
                                       className="btn btn-sm btn-outline-secondary">Rezervacija
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;