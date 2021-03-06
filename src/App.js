import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {


    const [state, setState] = useState([])
    const [page, setPage] = useState(1)
    const scrollToEnd = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=5`).then(res => res.json()).then(json => setState([...state, ...json.data]))
    }, [page])
    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd()
        }
    }
    return (
        <div className="App">
            {state.length > 0 && state.map((el, i) =>
                <div className={'st'}>
                    <h4>Id: {el._id}</h4>
                    <h4>Name: {el.name}</h4>
                    <h4>Trips: {el.trips}</h4>
                </div>)}
        </div>
    );
}

export default App;
