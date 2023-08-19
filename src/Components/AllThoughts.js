import React, { useEffect, useState } from "react";

const AllThoughts = () => {
  const [thoughts, setthoughts] = useState([]);

  const getThoughts = async () => {
    const response = await fetch("/api/thoughts", {
      method: "GET",
    });
    const data = await response.json();
    data.reverse();
    setthoughts(data);
  };

  useEffect(() => {
    getThoughts();
  }, []);

  return (
    <div className="all_thoughts">
      <ul className="thoughts_list">
        {thoughts.map((item) => (
          <li key={item._id} className="thought_item">
            <div className="thought_container">
              <div className="thought_head">
                <img
                  src={item.imageUrl}
                  alt="profile pic"
                  height={50}
                  width={50}
                  className="thought_profile"
                ></img>
                <h4 className="thought_owner">{item.name}</h4>
                <p className="thought_created_time">{item.createdTime}</p>
              </div>
              <hr></hr>
              <div className="thought_body">
                <p>{item.thought}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllThoughts;
