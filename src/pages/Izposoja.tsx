import "/src/css/Login.css"
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.tsx";

const Izposoja = (route) => {

    const knjiga_naslov = route.params.knjiga_naslov;
    const isbn = route.params.knjiga_isbn;

    const [cards, setCards] = useState([]);

    //console.log(naslov, isbn)

    const submit = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod/knjigaisbn/{}');
        console.log(res.data._embedded.knjigaIzvodDtoList);
        setCards(res.data._embedded.knjigaIzvodDtoList);
    }

    //useEffect(()=>{submit()},[]);


    return(
        <>
            <div className="form-signin2 py-5 m-auto">
                <div className="containerIzposoja">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <p>Knjiga naslov: {knjiga_naslov}</p>
                        <p>Knjiga isbn: {isbn}</p>
                    </div>
                </div>

                <div className="album py-5">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {
                                cards.map((card:any,i:any)=>{
                                    return <Card cardData={card} key={i}/>;
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Izposoja;