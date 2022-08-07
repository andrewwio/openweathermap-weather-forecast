const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Chicago",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Moscow",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];

  return (
    <div className="flex items-center justify-around space-x-6 my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-sm font-medium "
          onClick={() => {
            setQuery({ q: city.title })
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
