import React, {Component} from 'react';
import {Link} from "react-router-dom";
import bgImg from "../assets/bg.png"
import hotelImg from "../assets/hotelbg.jpg"

class Hero extends Component {
    render() {
        return (
            <section className="flex items-center justify-center pt-[90px] bg-cover bg-center bg-no-repeat w-full h-[655px]"
                     style={{backgroundImage: `url(${hotelImg})`}}
            >
                <div
                    className="flex items-center justify-center rounded-3xl"
                    >
                    <div className="relative top-20 xs:top-5o">
                        <h1 className="h1 text-5xl font-bold max-w-[40rem]">Easies Way to Find Dream Palace</h1>
                        <p className="my-10 max-w-[33rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequuntur dolore
                            harum ipsa magni modi non.</p>
                        <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
                            <div className="text-center regular-14 leading-tight pl-5">
                                <h5 className="uppercase font-bold">10% off</h5>
                                <p className="regular-14">On All Properties</p>
                            </div>
                            <Link to={'/listing'} className="bg-green-600 rounded-xl flex items-center justify-center py-5 text-white w-[100px]">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;