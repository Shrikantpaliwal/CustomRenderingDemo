import React from 'react'
import { useEffect, useState } from 'react';

const team = (props) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:1337/api/our-teams')
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
                <div className="container px-5 py-1 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{props.data.heading}</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{props.data.subheading}</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            Object.values(data.data).map((obj) => (
                                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={obj.attributes.imageUrl} />
                                        <div className="flex-grow">
                                            <h2 className="text-gray-900 title-font font-medium">{obj.attributes.name}</h2>
                                            <p className="text-gray-500">{obj.attributes.designation}</p>
                                        </div>
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

export default team
