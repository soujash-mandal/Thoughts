import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  // const [form, setform] = useState({});
  // const [users, setusers] = useState([]);
  // const [username, setusername] = useState("");
  const [thoughtObj, setthoughtObj] = useState({});
  const [thoughts, setthoughts] = useState([]);

  const { isLoaded, isSignedIn, user } = useUser();

  // const handleForm = (e) => {
  //   // console.log(e.target.value, e.target.name);
  //   setform({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const getThoughts = async () => {
    const response = await fetch("/api/thoughts", {
      method: "GET",
    });

    const data = await response.json();
    // console.log(data);
    data.reverse();
    setthoughts(data);
  };

  useEffect(() => {
    getThoughts();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(form);

  //   const response = await fetch("/api/demo", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  // when text area input changes keep updating
  const handleThoughtChange = (e) => {
    setthoughtObj({
      ...thoughtObj,
      ["thought"]: e.target.value,
      ["name"]: user.fullName,
      ["userId"]: user.id,
      ["createdTime"]: Date(),
      ["created"]: Date.now(),
      ["imageUrl"]: user.imageUrl,
    });
  };

  // called when submit button clicked
  const handlePost = async (e) => {
    e.preventDefault();
    // console.log(thoughtObj);
    console.log(thoughtObj.thought);
    if (!thoughtObj.thought) {
      return;
    }
    const response = await fetch("/api/thoughts", {
      method: "POST",
      body: JSON.stringify(thoughtObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setthoughtObj({});
    console.log(data);
  };

  return (
    <>
      <div className="home_page">
        <div className="create_thoughts">
          <form onSubmit={handlePost} className="create_thoughts_form">
            <textarea
              placeholder="Write Your Thoughts ... "
              cols={100}
              rows={4}
              onChange={handleThoughtChange}
              className="thought_textarea"
            ></textarea>
            <input
              type="submit"
              className="create_thought_btn"
              value="POST"
            ></input>
          </form>
        </div>
        <div className="all_thoughts">
          <ul className="thoughts_list">
            {/* <li className="thought_item">
              <div className="thought_container">
                <div class="thought_head">
                  <img
                    src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yVThyN0gweFhkanhZanV2Z2NwU1E5Qm9JN3UuanBlZyJ9"
                    alt="profile pic"
                    height="50"
                    width="50"
                    className="thought_profile"
                  />
                  <h3 className="thought_owner">Soujash Mandal</h3>
                  <p className="thought_created_time">Fri Aug 18 2023 13:39:41 GMT+0530 (India Standard Time)</p>
                </div>
                <hr></hr>
                <div class="thought_body">
                  <p>
                    "Life is a canvas, and each day is a brushstroke. 🎨🌅 Let's
                    paint our moments with vibrant hues of laughter, kindness,
                    and adventure. 🎉🌈 Amidst the challenges, let our spirits
                    remain as resilient as mountains, and our hearts as free as
                    soaring birds. 🏔️🦅 And as the sun sets on today's
                    masterpiece, may we look forward to tomorrow's blank canvas
                    with hope and endless possibilities. 🌇🌟"
                  </p>
                </div>
              </div>
            </li>
            <li className="thought_item">
              <div className="thought_container">
                <div class="thought_head">
                  <img
                    src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yVThyN0gweFhkanhZanV2Z2NwU1E5Qm9JN3UuanBlZyJ9"
                    alt="profile pic"
                    height="50"
                    width="50"
                  />
                  <h4>Soujash Mandal</h4>
                  <p>Fri Aug 18 2023 13:39:41 GMT+0530 (India Standard Time)</p>
                </div>
                <div class="thought_body">
                  <p>
                    Amidst the chaos of life, there exists a serene sanctuary
                    within our minds. 🌌✨ It's within this tranquil realm that
                    we can find solace, introspection, and the power to navigate
                    the tumultuous waters of existence. 🌊🚣‍♀️ As we journey
                    through the tapestry of moments, let us remember to pause,
                    breathe, and embrace the beauty of the present. 🌸🌼 For in
                    each fleeting second lies a universe of potential and a
                    chance to create our own meaningful constellations in the
                    vast expanse of time. ⏳🌟
                  </p>
                </div>
              </div>
            </li> */}

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
      </div>
    </>
    // <div>
    //   <h1> Hi This is Home Page</h1>
    //   <form onSubmit={handleSubmit}>
    //     <p>{JSON.stringify(form)}</p>
    //     <span>username</span>
    //     <input type="text" name="username" onChange={handleForm}></input>
    //     <span>password</span>
    //     <input type="text" name="password" onChange={handleForm}></input>
    //     <input type="submit"></input>
    //   </form>
    //   <div>
    //     <ul>
    //       {users.map((user) => (
    //         <li key={user._id}>
    //           {user.username} , {user.password}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default HomePage;
