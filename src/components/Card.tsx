import { useNavigate } from 'react-router-dom';

interface CardProps {
    cardData: {
        knjiga_izvod_naslov: string;
        knjiga_izvod_isbn: string;
    };
    navigation: any; // Add the navigation prop
}
const Card: React.FC<CardProps> = ({navigation, cardData}) => {

    const navigations = useNavigate();

    const handleIzposojaClick = () => {
        navigation.navigate('/izposoja', {
            knjiga_naslov: cardData.knjiga_izvod_naslov,
            isbn: cardData.knjiga_izvod_isbn,
        });
    };

    const handleIzposojaClick1 = () => {
        const { knjiga_izvod_naslov, knjiga_izvod_isbn } = cardData;
        //navigation(`/izposoja/${knjiga_izvod_naslov}/${knjiga_izvod_isbn}`);
        navigations(`/izposoja?naslov=${knjiga_izvod_naslov}&isbn=${knjiga_izvod_isbn}`);
    };

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
                                    <a href="/izposoja" type="button"
                                       className="btn btn-sm btn-outline-secondary"
                                        onClick={handleIzposojaClick}>Izposoja
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