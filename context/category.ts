"use client";
import { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';
import toast from "react-hot-toast";

type Category = {
  name: string;
  // Define any other properties your category object may have
};

type ContextType = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  updatingCategory: Category | null;
  setUpdatingCategory: Dispatch<SetStateAction<Category | null>>;
  createCategory: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  updateCategory: () => Promise<void>;
  deleteCategory: () => Promise<void>;
};

export const CategoryContext = createContext<ContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  // to create a category:
  const [name, setName] = useState("");
  // for fetching of categories:
  const [categories, setCategories] = useState([]);
  // for updating and deleting:
  const [updatingCategory, setUpdatingCategory] = useState(null);

  const createCategory = async () => {
    try {
      //
    } catch (err) {
      console.log(err);
      toast.error("An error occured. Try again.");
    }
  };
  const fetchCategories = async () => {
    try {
      //
    } catch (err) {
      console.log(err);
      toast.error("An error occured. Try again.");
    }
  };
  const deleteCategory = async () => {
    try {
      //
    } catch (err) {
      console.log(err);
      toast.error("An error occured. Try again.");
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        name,
        setName,
        categories,
        setCategories,
        updatingCategory,
        setUpdatingCategory,
        createCategory,
        fetchCategories,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};


export const useCategory = () => useContext(CategoryContext);