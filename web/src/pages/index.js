import * as React from "react"
import * as style from "../styles/home.module.css"
import Menu from "../components/menu";
import Cell from "../components/cell"
import Banner from "../components/banner";

const Home = () => {
  return (
      <main className={style.container}>
        <Menu />
          <div className={style.wrapper}>
              <div className={style.grid}>
                  {[...Array(16)].map((i) =>
                  <Cell key={i}/>
      
                  )}
              </div>
          </div>
          <Banner />
      </main>
  );
}

export default Home
