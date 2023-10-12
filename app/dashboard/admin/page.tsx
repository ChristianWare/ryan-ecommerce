"use client";

import { useState } from "react";
import styles from "./AdminPage.module.css";
import CategoriesList from "@/components/CategoriesList/CategoriesList";

const adminMenu = [
  {
    id: 1,
    menutItem: "Product",
    menuDesc: "All products listed here",
  },
  {
    id: 2,
    menutItem: "Categories",
    menuDesc: "All categories listed here",
    btn: <CategoriesList />
  },
  {
    id: 3,
    menutItem: "Orders",
    menuDesc: "All orders listed here",
  },
  {
    id: 4,
    menutItem: "Users",
    menuDesc: "All users listed here",
  },
];

const AdminPage = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id: number) => {
    setToggle(id);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p className='lead'>Admin Dashboard</p>
          <hr />
          ...
        </div>
      </div>
      <div className={styles.blogTabs}>
        {adminMenu.map((x) => (
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
      {adminMenu.map((y) => (
        <div
          key={y.id}
          className={toggle === y.id ? styles.showContent : styles.content}
        >
          <hr />
          <h2>{y.menutItem}</h2>
          <p>{y.menuDesc}</p>
          <div>{y.btn}</div>
        </div>
      ))}
    </div>
  );
};
export default AdminPage;
