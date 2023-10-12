"use client";
import { useState } from "react";
import styles from "./CategoryForm.module.css";

const CategoryForm = ({
  showCategoryForm,
  setShowCategoryForm,
  reloadData,
}: CategoryFormProps) => {
  const [isModalOpen, setModalOpen] = useState(showCategoryForm);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowCategoryForm(false); // You may want to notify the parent component to update the state
  };

  return (
    <div>
      {showCategoryForm && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <h2>Add Category</h2>
            {/* Add your form or other content here */}
            <form>
              <input
                type='text'
                className='form-control mb-4'
                placeholder='Category Name'
                required
              />
              <textarea
                cols={50}
                rows={10}
                className='form-control mb-4'
                placeholder='Category description'
              />
              <div className={styles.btnContainer}>
                <button onClick={closeModal}>Cancel</button>
                <button
                  onClick={() => {
                    /* Add your logic here */
                  }}
                >
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default CategoryForm;

interface CategoryFormProps {
  showCategoryForm: boolean;
  setShowCategoryForm: (show: boolean) => void;
  reloadData: () => void;
}
