import Card from "../components/Card.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [cards, setCards] = useState([]);

    const loadBlogs = async () => {
        const res =
            await axios.get('http://localhost:4545/diplomska_knjiznica/knjigaizvod');
        //console.log(res.data._embedded.knjigaIzvodDtoList)
        setCards(res.data._embedded.knjigaIzvodDtoList);
    }

    useEffect(()=>{loadBlogs()},[]);

    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Sistem knjižnice</h1>
                            <p className="lead text-body-secondary">
                                To je moj diplomski projekt za upravljanje sistema knjižnice, z uporabo java spring boot.
                            </p>
                            <p>
                                <a href="/poisciknjigo" className="btn btn-primary my-2">Poišči knjigo</a>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album py-5">
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
            </main>
        </>
    )
}

export default Home;