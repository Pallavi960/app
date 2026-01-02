import React, { useState } from 'react';

const Register_user = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  async function collectData(e) {
    e.preventDefault();

    const userData = { name, email, pass };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/register`, {
          method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  body: JSON.stringify(userData)
})


      const data = await res.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  }

  return (
    <form onSubmit={collectData} className="bg-amber-500 p-4 space-y-2">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name"
        autoComplete="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
        autoComplete="new-password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register_user;
