"use client";

import { useState } from "react";
import styles from "./CategoriesList.module.css";
import CategoryForm from "../CategoryForm/CategoryForm";

const CategoriesList = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className='btn btn-primary btn-raised mb-4'
        onClick={() => setShowCategoryForm(true)}
      >
        Add Category
      </button>

      {showCategoryForm && (
        <CategoryForm
          showCategoryForm={showCategoryForm}
          setShowCategoryForm={setShowCategoryForm}
          reloadData={()=> {}}
        />
      )}
    </div>
  );
};
export default CategoriesList;
