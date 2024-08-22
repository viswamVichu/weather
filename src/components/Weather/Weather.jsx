import React, { useEffect, useState } from "react";

const Weather = () => {
  const [search, setSearch] = useState("Kumbakonam");
  const [city, setCity] = useState("");
  const weatherApi = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=843f8194716eba147e3aa38bf7bf217b`
    );
    const result = await response.json();
    setCity(result);
    console.log(result);
  };
  useEffect(() => {
    weatherApi();
  }, [search]);
  return (
    <div className=' cont   h-screen flex justify-center items-center'>
      <div className=' images  flex flex-col justify-center items-center rounded-xl '>
        <input
          type='text'
          className='bg-black p-2 rounded-lg  text-white w-[250px]'
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        />

        <div className=' text-3xl font-extrabold rounded-2xl w-[300px] m-5 p-5 '>
          <h1 className='text-center m-2'> {city?.name}</h1>
          <p>{}</p>
          <h1 className='flex justify-center gap-14 m-2 '>
            {" "}
            <span>
              <img
                src='https://www.shutterstock.com/shutterstock/photos/1376395298/display_1500/stock-vector-dry-air-conditioning-icon-vector-image-1376395298.jpg'
                alt=''
                className='h-10'
              />
            </span>
            {city?.main?.humidity}
          </h1>
          <h1 className='flex gap-3  justify-center m-2'>
            {" "}
            <span>
              <img
                src='https://static.thenounproject.com/png/1979336-200.png'
                alt=''
                className='h-10'
              />
            </span>
            {city?.main?.temp}
          </h1>

          <h1 className='flex  gap-14  justify-center'>
            {" "}
            <span>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqsj9sbcmPYmcr9sBgUCnhSgC0RrhruUdpw&s'
                alt=''
                className='h-10'
              />
            </span>{" "}
            {city?.wind?.speed}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
