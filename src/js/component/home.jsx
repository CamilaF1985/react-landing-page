import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <Jumbotron />
                <div className="row">
                    <div className="col mb-4">
                        <Card />
                    </div>
                    <div className="col mb-4">
                        <Card />
                    </div>
                    <div className="col mb-4">
                        <Card />
                    </div>
                    <div className="col mb-4">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;







