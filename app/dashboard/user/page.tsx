"use client";

import styles from "./UserPage.module.css";
import { useState } from "react";

const userMenu = [
  {
    id: 1,
    menutItem: "Orders",
    menuDesc: "All orders listed here",
  },
  {
    id: 2,
    menutItem: "Persoanl Information",
    menuDesc: "persoanl contact details listed here",
  },
];

const UserDashboard = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id: number) => {
    setToggle(id);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p className='lead'>User Dashboard</p>
          <hr />
          ...
        </div>
      </div>
      <div className={styles.blogTabs}>
        {userMenu.map((x) => (
          <>
            <div className={styles.tab} key={x.id}>
              <div className={styles.tab} onClick={() => updateToggle(x.id)}>
                {x.menutItem}
              </div>
            </div>
          </>
        ))}
      </div>
      <br />
      {userMenu.map((y) => (
        <div
          key={y.id}
          className={toggle === y.id ? styles.showContent : styles.content}
        >
          <hr />
          <h2>{y.menutItem}</h2>
          <p>{y.menuDesc}</p>
        </div>
      ))}
    </div>
  );
};
export default UserDashboard;
