import React from "react";

const Card = () => {
    return (
        <div className="card custom-card mx-0">
            <img
                src="https://fastly.picsum.photos/id/270/500/325.jpg?hmac=8qxZXOOXvha7k0822XXeY6oDd0e5EJkSfUx2RfiUn6o"
                className="card-img-top mx-auto" alt="foto"
            />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                    Find Out More!
                </a>
            </div>
        </div>
    );
};

export default Card;

