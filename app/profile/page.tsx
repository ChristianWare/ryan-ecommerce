"use client";

import styles from "./ProfilePage.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "@/redux/userSlice";
import { useSession } from "next-auth/react";




const ProfilePage = () => {

    const { data, status } = useSession();
    const { currentUser } = useSelector((state: any) => state.user);

    const dispatch = useDispatch();

    const getCurrentUser = async () => {
      try {
        dispatch(SetCurrentUser(data?.user?.name?.slice(0, 1)));
      } catch (error: any) {
        console.log("Something went wrong");
      }
    };

    // Call getCurrentUser when the session is authenticated
    if (status === "authenticated" && !currentUser) {
      getCurrentUser();
    }

    // Call getCurrentUser when the session is authenticated
    if (status === "authenticated" && !currentUser) {
      getCurrentUser();
    }

  const [toggle, setToggle] = useState(1);

  const updateToggle = (id: number) => {
    setToggle(id);
  };

  const adminMenu = [
    {
      id: 1,
      menutItem: "Product",
    },
    {
      id: 2,
      menutItem: "Categories",
    },
    {
      id: 3,
      menutItem: "Orders",
    },
    {
      id: 4,
      menutItem: "Users",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.blogTabs}>
        {currentUser && (
          <h1>You are logged in</h1>
        )}
        {adminMenu.map((x) => (
          <div className={styles.tab} key={x.id}>
            <div className={styles.tab} onClick={() => updateToggle(x.id)}>
              {x.menutItem}
            </div>
          </div>
        ))}
      </div>
      <div className={toggle === 1 ? styles.showContent : styles.content}>
        <h2>Tab 1</h2>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ab
          ipsum iste quos recusandae accusantium! Officiis quis totam, iusto,
          ducimus iste commodi culpa cumque, hic placeat deserunt ipsam
          consequuntur debitis.
        </p>
      </div>
      <div className={toggle === 2 ? styles.showContent : styles.content}>
        <h2>Tab 2</h2>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ab
          ipsum iste quos recusandae accusantium! Officiis quis totam, iusto,
          ducimus iste commodi culpa cumque, hic placeat deserunt ipsam
          consequuntur debitis.
        </p>
      </div>
      <div className={toggle === 3 ? styles.showContent : styles.content}>
        <h2>Tab 3</h2>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ab
          ipsum iste quos recusandae accusantium! Officiis quis totam, iusto,
          ducimus iste commodi culpa cumque, hic placeat deserunt ipsam
          consequuntur debitis.
        </p>
      </div>
    </div>
  );
};
export default ProfilePage;
