import { useState } from 'react';
import axios from 'axios'

const Weather = () => {

    const [temperature, settemperature] = useState('');
    const [location, setlocation] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const handeleclick = () => {
        setIsLoading(true);
        axios
            .get(`http://api.weatherstack.com/current?access_key=3ad490972ca62027b8d67ce49fdb9370&query=${location}`)
            .then((response) => {
                settemperature(response.data.current);
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }




    return (
        <div className="background-radial-gradient overflow-hidden  text-dark">
            <h1 className='text-center'>
                Cliquer ici pour obtenir la temperature</h1>
            <label className='mt-6'>Ecrivez la localisation: </label>
            <input value={location} type="text" className='form-control' onChange={(e) => setlocation(e.target.value)}></input><br />
            <button onClick={handeleclick} className='btn btn-secondary'>Voir Détails</button>
            {
                isLoading ?

                    <div>Loading...</div> :

                    <div >

                        <div className="card-body">
                            <p className="card-text"> {location}</p>
                            <p className="card-text">  {temperature.temperature}.</p>
                        </div>
                    </div>

            }:
        </div>
    );
}

export default Weather;