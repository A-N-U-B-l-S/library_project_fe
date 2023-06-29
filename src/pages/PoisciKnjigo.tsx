import {SyntheticEvent, useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import Card from "../components/Card.tsx";

const PoisciKnjigo = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const[imeKnjige, setImeKnjige] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [cards, setCards] =
        useState([]);

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod/knjiganaslov/' + imeKnjige);
        console.log(res.data._embedded.knjigaIzvodDtoList);
        setCards(res.data._embedded.knjigaIzvodDtoList);



        if (res.status == 201){
            setRedirect(true);
        }

        if (redirect){
            return <Navigate to={'/'}/>
        }

    }

    useEffect(() => {
        // Update window width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <div className="form-signin2 py-5 m-auto">
                <div className="button">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Poišči knjigo</h1>
                        <div className="form-floating">
                            <input type="Email address" className="form-control" id="floatingInput" placeholder="test"
                                   onChange={(e) => setImeKnjige(e.target.value)}/>
                            <label htmlFor="floatingInput">Ime knjige</label>
                        </div>
                        <p></p>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Poišči {windowWidth}</button>
                    </form>
                    <p></p>
                </div>
            </div>
            <div className="py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            cards.map((card:any,i)=>{
                                return <Card cardData={card} key={i}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default PoisciKnjigo;