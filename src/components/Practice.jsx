import { useState } from "react";

export default function BatchUpdate() {
    // const [number, setNumber] = useState(0);
    // const [position, setPosition] = useState({ x: 0, y: 0 });



    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }
    /* const [person, setPerson] = useState({
        firstName: 'Zihad',
        lastName: 'Hosan',
        email: 'zihadhossain88@hotmail.com'
    });

    

    function handelFirstName(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }
    function handelLastName(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        })
    }
    function handelemail(e) {
        setPerson({
            ...person,
            email: e.target.value
        })
    } */
    return (
        <>
            {/* <div className="flex">
                <h1 className="text-6xl">{number}</h1>
                <button className="primary-btn" onClick={() => {
                    setNumber(number + 2);
                    setNumber(n => n + 2);
                    setNumber(n => n + 1);
                }}>+3</button >
            </div> */}

            {/* <div className="w-screen h-screen relative" onPointerMove={e => { setPosition({ x: e.clientX, y: e.clientY }) }}>
                <div style={{ transform: `translate(${position.x}px, ${position.y}px)`, }} className="absolute transition w-5 h-5 bg-red-600 rounded-full -top-[10px] -left-[10px]"></div>
            </div> */}


            {/* <div className="flex flex-col">
                <label className="flex mb-3 items-center min-w-[180px]">
                    First name:
                    <input className="text-black p-2 rounded-[8px] ml-[12px]"
                        value={person.firstName}
                        onChange={handelFirstName}
                    />
                </label>
                <label className="flex mb-3 items-center ">
                    Last name:
                    <input className="text-black p-2 rounded-[8px] ml-[12px]"
                        value={person.lastName}
                        onChange={handelLastName}
                    />
                </label>
                <label className="flex mb-3 items-center ">
                    Email:
                    <input className="text-black p-2 rounded-[8px] ml-[12px]"
                        value={person.email}
                        onChange={handelemail}
                    />
                </label>
                <p className="text-cyan-500 text-[27px]">
                    {person.firstName}{' '}
                    {person.lastName}{' '}
                    ({person.email})
                </p>
            </div > */}

            <div className="form-box border-[1px] border-cyan-700 rounded-[10px] p-8 mx-auto my-5 w-max">
                <h2 className="text-[30px] text-center text-cyan-600 uppercase font-300">Change name through input</h2>
                <form action="#" className="flex sm:flex-col md:flex-col lg:flex-row flex-col mt-3 gap-3">
                    <label htmlFor="">First name
                        <input
                            name="firstName"
                            value={person.firstName}
                            onChange={handleChange}
                            className="input-style"
                            type="text" />
                    </label>
                    <label htmlFor="">Last name
                        <input
                            name="lastName"
                            value={person.lastName}
                            onChange={handleChange}
                            className="input-style"
                            type="text" />
                    </label>
                    <label htmlFor="">Email
                        <input
                            name="email"
                            value={person.email}
                            onChange={handleChange}
                            className="input-style"
                            type="email" />
                    </label>
                </form>

                <h3 className="text-red-400 sm:text-[18px] md:text-[25px]  text-center mt-4 h-[37.5px]">{person.firstName}{' '} {person.lastName}{' '} {person.email}</h3>
            </div>


        </>
    )
}