import React, { useState } from 'react';

const Register_user = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  async function collectData(e) {
    e.preventDefault();

    const userData = { name, email, pass };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/register`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  }

  return (
    <form onSubmit={collectData} className="bg-amber-500">
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register_user;
