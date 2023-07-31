const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');





function akash() {
    let data = new FormData();
    data.append('image', fs.createReadStream('/C:/Users/hacke/Downloads/image (3).JPG'));
    console.log(data)
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/predict/',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiZW1haWwiOiJha2FzaHNhY2hhbmJvc3NAZ21haWwuY29tIiwibmFtZSI6ImFrYXNoIn0.FzXxR0YRPSpGiQbIx8bK_OmzAWxcH8hfh8TyGIjyTiI',
            ...data.getHeaders
        },
        data: data
    }

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log("heloo");
        });

}

akash()