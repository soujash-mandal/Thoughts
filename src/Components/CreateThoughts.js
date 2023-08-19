import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";

const CreateThoughts = () => {
  const [thoughtObj, setthoughtObj] = useState({});
  const { user } = useUser();

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

  const handlePost = async (e) => {
    e.preventDefault();
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
    window.location.reload();
  };

  return (
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
  );
};

export default CreateThoughts;
