import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Dashbord} from "./fn/dashbord";
import {Abonne} from "./fn/abonne";
//url: "https://jsonplaceholder.typicode.com/posts/1" {Abonne.RechercherAbonne}
function App() {
	const [search, setSearch] = useState("agape");
	
	const handleChange = (e:any)=> {
		setSearch(e.target.value)
		var ag = e.target.value
		console.log("POST Resultat", ag);
		Abonne.RechercherAbonne(ag)
	}

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
				<input type='text' value={search} name="search" id='search' onChange={handleChange} />
                <button className='btn' onClick={Abonne.ListeAbonne}>
                    Afficher
                </button>
				<button className='btn' onClick={Abonne.ListeAbonne}>
                    Rechercher Abonner
                </button>
				<button className='btn' onClick={Dashbord.septDerniersJours}>
                    graphique
                </button>
				<button className='btn' onClick={Dashbord.envoyer_data}>
                    Create
                </button>
            </header>
        </div>
    );
}

export default App;
