import Rectangle from '../../assets/Rectangle 4284.png'



const Appointment = () => {
    
    return (
      <div className="my-24">
        <h1 className="text-5xl text-center text-pink-600  p-3  ">
          Appinment system
            </h1>
            <hr className="w-[400px] mx-auto h-[5px] bg-pink-600 mb-10" />

        <div className="card lg:card-side bg-base-100 shadow-xl md: text-center space-y-6 ">
          <figure>
            <img
              className="w-3/4 md:w-[600px]"
              src={Rectangle}
              alt="Album"
            />
          </figure>
          <div className="card-body space-y-6 ">
            <h2 className="text-center text-5xl text-yellow-500 font-bold">
              Book an Appointment <br /> Today!
            </h2>
            <p className="text-gray-400">
              Click the button to listen on Spotiwhy app. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Soluta, veritatis! Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Fugit impedit neque
              iste expedita porro cupiditate hic laborum earum. Rerum,
              consectetur.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-pink-700 text-xl text-white mx-auto ">
                Get Appointment{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Appointment;