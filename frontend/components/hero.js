import React from 'react'

const hero = (props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 pl-4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="lg:w-[450px] title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">{props.data.heading}
                        </h1>
                        <p className="mb-8 leading-relaxed">{props.data.subheading}</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{props.data.buttonText}</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={props.data.url}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default hero
