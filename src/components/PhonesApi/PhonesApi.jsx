import axios from "axios";
import { useEffect, useState } from "react";


const PhonesApi = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const fakePhones = data.data.data
                const fakedata = fakePhones.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(fakedata)
                console.log(fakedata);
            })


    }, [])


    return (
        <div className="mt-20 mb-10">
            <h2 className="text-4xl">Total Phone:{phones.length}</h2>
            {
                phones.map((phone, index) => <h2 key={index}>Name:{phone.name} </h2>)
            }

        </div>
    );
};

export default PhonesApi;