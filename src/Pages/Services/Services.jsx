

const Services = ({ service }) => {
    const { image, name, price, title, description } = service || {};
    return (
      <div>
        <div className="card w-96 mx-auto bg-base-100 shadow-xl h-[500px]">
          <figure>
            <img className="w-full h-[200px] "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
            <div className="card-actions justify-center">
              <button className="btn bg-pink-600 text-white">Veiw Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;