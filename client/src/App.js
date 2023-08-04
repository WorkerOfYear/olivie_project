import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch('/homepage').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []

  )
  return (
    // <div>
    //   {
    //     (typeof data.members === 'undefined') ? (
    //       <p>Loading ...</p>
    //     ) : (
    //       data.members.map((member, i) => (
    //         <p key={i}>{member}</p>
    //       ))
    //     )
    //   }
    // </div>


    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <div className="search__row">
            <p>{data.member}</p>
            <input type="text" className="search__what" placeholder="WHO    like guitarist..." />
            <input type="text" className="search__where" placeholder="WHERE   like city, state..." />
            <button className="search__btn">Search</button>
          </div>
          <div className="post__row">
            <button className="post-resume">Post your resume</button>
            <button className="post-vacancy">Post your vacancy</button>
          </div>
          <div className="content">
            <label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare lectus sit amet est placerat in. Sit amet nisl purus in mollis nunc sed. Pellentesque massa placerat duis ultricies lacus sed. Consequat interdum varius sit amet mattis vulputate enim. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Porta lorem mollis aliquam ut porttitor leo. Etiam erat velit scelerisque in dictum non consectetur a erat. Scelerisque viverra mauris in aliquam sem fringilla ut. At quis risus sed vulputate odio ut enim blandit.
            </label>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
