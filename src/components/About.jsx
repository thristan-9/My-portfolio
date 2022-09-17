import React from "react";

function About() {

    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl'>
                    Hello! my name is Thristan Gabriel, I’m  19 years old and i was born in Brasil.
                    My first contact with programming was when I was 15 years old as a intern in a startup called Clinicorp, in those years I was responsible for projects such as recurring billing, financial data import, redesign of screens and others. Nowadays I’m in a small team called Fintech at Clinicorp, using a Baas(Banking as a service) in the background of the project to deliver a complete financial solution to increase the revenue of our customers.
                </p>
            </div>

        </div>
    );
}
export default About;
