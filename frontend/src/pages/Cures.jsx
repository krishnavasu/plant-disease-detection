import React, { useEffect, useState } from 'react'
import cure from "./cure.json"
import { cureRoute, host } from '../utils/ApiRoutes'
import axios from 'axios'
import "./cure.css"
function Cures() {
    const [disease, setDisese] = useState("")
    const [about, setAbout] = useState("")
    const [extra, setExtra] = useState([])
    const [prevent, setPrevent] = useState([])
    const [img, setImg] = useState("")
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(() => {
        axios.get(cureRoute, {
            params: {
                Authorization: "Bearer " + token
            }

        })
            .then((res) => {
                // console.log(res.data.res)
                console.log("output", cure[res.data.res.output])
                const cureData = cure[res.data.res.output]
                setDisese(res.data.res.output)
                setExtra(cureData.extra)
                setPrevent(cureData.prevent)
                setAbout(cureData.about)
                setImg(res.data.res.image)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div style={{ height: '100vh', overflow: "auto", backgroundColor: 'azure' }}>
            <div style={{ display: "flex", flexDirection: 'column', }}>
                <center><h1 style={{ background: 'black', color: 'white' }}>Cures</h1></center>
                {/* {result} */}
                <center><img src={host + img} style={{ height: '200px', width: '200px' }} /></center>
                <center><p style={{ fontStyle: 'italic', fontWeight: 'bold', background: 'black', color: 'white', fontSize: '30px', margin: '10px' }}>Disease : {disease}</p></center>
                <details><summary>About</summary>
                    <p>{about}</p></details>
                <details><summary>Preventions
                </summary><p>{
                    prevent.map(e => <p>{e}</p>)
                }</p></details>
                <details><summary>Extra info

                </summary>
                    <p>{
                        extra.map(e => <p>{e}</p>)
                    }</p></details>



            </div>

        </div>

    )
}

export default Cures