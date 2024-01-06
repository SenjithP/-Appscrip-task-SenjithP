import { useEffect, useRef, useState } from "react";
import TopHeader from "../Components/TopHeader/TopHeader";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import ProductSort from "../Components/ProductSort/ProductSort";
import ProductListing from "../Components/ProductListing/ProductListing";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showFilter, setShowFilter] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedSortValue, setSelectedSortValue] = useState("RECOMMENDED");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDropDownClick = () => {
    setShowSubItems(!showSubItems);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortOptionClick = (value) => {
    setSelectedSortValue(value);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <TopHeader />
      <Navbar
        isMobile={isMobile}
      />
      <Header />
      <ProductSort
        toggleFilter={toggleFilter}
        showFilter={showFilter}
        handleDropDownClick={handleDropDownClick}
        showSubItems={showSubItems}
        selectedSortValue={selectedSortValue}
        dropdownRef={dropdownRef}
        isDropdownOpen={isDropdownOpen}
        handleToggleDropdown={handleToggleDropdown}
        handleSortOptionClick={handleSortOptionClick}
      />
      <ProductListing
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        showSubItems={showSubItems}
        setShowSubItems={setShowSubItems}
        products={products}
      />
      <Footer />
    </>
  );
};

export default HomePage;
