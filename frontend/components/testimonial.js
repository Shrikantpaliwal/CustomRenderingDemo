import React from 'react'
import { useEffect, useState } from 'react';

const testimonial = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:1337/api/testimonials')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (!data) return <p>No profile data</p>
    console.log(data.data)
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-center w-full mb-20 sm:text-3xl text-2xl font-medium title-font text-gray-900">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        {   
                            Object.values(data.data).map((obj) => (
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={obj.attributes.id}>
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={obj.attributes.image} />
                                        <p className="leading-relaxed">{obj.attributes.feedback}</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{obj.attributes.author}</h2>
                                        <p className="text-gray-500">{obj.attributes.designation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default testimonial
