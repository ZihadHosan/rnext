import React from "react";


export default function Wrapper({ title, lswLesson, children }) {

    const defaultContent = <p className="text-center">Start you practice...</p>;

    return (
        <>
            <h1 className="text-orange-400 text-4xl text-center mb-5 mt-8">{title}
                <span className="text-2xl block mt-1">{lswLesson}</span> </h1>
            <div className='practice_wrapper'>


                {/* Code Start */}

                {/* Code END Here */}
                {React.Children.map(children, child => child)}
                {React.Children.count(children) === 0 && defaultContent}
            </div>
        </>
    );
}
