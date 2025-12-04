import { useState, useEffect } from "react";

const Darkmode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      setDark(JSON.parse(saved));
      document.body.classList.toggle("dark", JSON.parse(saved));
    }
  }, []);

  const toggleMode = () => {
    setDark(prev => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  }

  return (
    <button onClick={toggleMode} className="btn1">
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default Darkmode;
