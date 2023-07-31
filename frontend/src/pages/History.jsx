import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { host, predictRoute } from '../utils/ApiRoutes'

function History() {
    const [array, setArray] = useState([])
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(() => {
        axios.get(predictRoute, {
            params: {
                Authorization: "Bearer " + token
            }

        })
            .then((res) => {
                console.log(res.data.res)
                setArray(res.data.res)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const xyz = (time) => {
        const timestamp = '2023-05-16T11:12:10.152970Z';
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString();
      
        return formattedDate
    }

    return (

        <div style={{ height: "100vh", overflow: "auto" }}>
            {array?.map(e => <div style={{ color: "blue", border: "3px solid green", display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: "75px", width: "60px", border: "2px solid blue", margin: "0.5px" }}>
                    <img src={host + e.image} style={{ height: "75px", width: "60px" }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "15px" }}>
                    <label style={{ color: "black" }}>image id :
                        <span style={{ color: "blue" }}>{e.id} </span>
                    </label>
                    <label style={{ color: "black" }}> image :
                        <span style={{ color: "blue" }}>{e.image}</span>
                    </label>
                    <label style={{ color: "black" }}> output :
                        <span style={{ color: "blue" }}>{e.output}</span>
                    </label>
                    <label style={{ color: "black" }}> predicted on :
                        <span style={{ color: "blue" }}>{xyz(e.predicted_on)}</span>
                    </label>
                </div>

            </div>)}
            <h1>This is History</h1>
        </div>

    )
}

export default History