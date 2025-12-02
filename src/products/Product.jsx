import React, { useState, useEffect } from "react";
import { ShoppingCart, Eye, Heart, ScanFace } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedShape, setSelectedShape] = useState([]);
  const [priceRange, setPriceRange] = useState(2000);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://graduation-project1.runasp.net/Api/products"
        );
        const data = await res.json();

        const BASE_URL = "http://graduation-project1.runasp.net";

        const formatted = data.map((p) => {
          const productImg =
            p.productImages && p.productImages.length > 0
              ? `${BASE_URL}${p.productImages[0].imgUrl}` // أول صورة
              : `${BASE_URL}/${p.defaultImgUrl}`; // fallback

          // السعر القديم الوهمي: أغلى 20% من السعر الأصلي
          const oldPrice = (p.price * 1.2).toFixed(2);

          return {
            id: p.productId,
            name: p.title,
            price: p.price,
            oldPrice, // <-- أضفنا السعر القديم هنا

            description: p.description,
            category: p.category ? p.category.name : "Other",
            gender: p.gender || "Unisex",
            shape: p.shape || "Square",
            image_url: productImg,
          };
        });

        setAllProducts(formatted);
      } catch (error) {
        console.log("Error loading products:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckbox = (value, array, setArray) => {
    if (array.includes(value)) {
      setArray(array.filter((v) => v !== value));
    } else {
      setArray([...array, value]);
    }
  };

  const getFilteredProducts = () => {
    return allProducts.filter((p) => {
      const categoryMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const genderMatch =
        selectedGender.length === 0 || selectedGender.includes(p.gender);
      const shapeMatch =
        selectedShape.length === 0 || selectedShape.includes(p.shape);
      const priceMatch = p.price <= priceRange;

      return categoryMatch && genderMatch && shapeMatch && priceMatch;
    });
  };

  const filteredProducts = getFilteredProducts();
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const [favorites, setFavorites] = useState([]);
  // دالة لتبديل حالة القلب
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedGender, selectedShape, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <aside className="w-full lg:w-64 space-y-6">
          {/* CATEGORY */}
          <div>
            <h3 className="font-bold mb-2">Categories</h3>
            <ul className="space-y-1">
              {["All", "Sunglasses", "Eyeglasses"].map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-sm ${
                      selectedCategory === cat
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* GENDER */}
          <div>
            <h3 className="font-bold mb-2">Gender</h3>
            <div className="space-y-1">
              {["Men", "Women", "Unisex"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedGender.includes(g)}
                    onChange={() =>
                      handleCheckbox(g, selectedGender, setSelectedGender)
                    }
                    className="accent-blue-600"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* SHAPE */}
          <div>
            <h3 className="font-bold mb-2">Frame Shape</h3>
            <div className="space-y-1">
              {["Round", "Square", "Aviator", "Cat Eye"].map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedShape.includes(s)}
                    onChange={() =>
                      handleCheckbox(s, selectedShape, setSelectedShape)
                    }
                    className="accent-blue-600"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div>
            <h3 className="text-lg font-bold mb-3">Price</h3>
            <input
              type="range"
              className="w-full h-2 bg-gray-300 rounded-lg"
              min="50"
              max="2000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
            />
            <p className="text-sm mt-1">Up to ${priceRange}</p>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white  overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* صورة المنتج مع overlay عند hover */}
                <div className="relative overflow-hidden group">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* أيقونة القلب في الزاوية */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 left-2 z-10 p-2 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition cursor-pointer"
                  >
                    <Heart
                      size={20}
                      className={
                        favorites.includes(product.id)
                          ? "text-red-600"
                          : "text-black"
                      }
                      fill={
                        favorites.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    state={{ product }}
                    className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition bg-black/40"
                  >
                    View Details
                  </Link>
                </div>

                {/* معلومات المنتج */}
                <div className="p-4 flex flex-col gap-2">
                  {/* اسم المنتج */}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h2>

                  {/* وصف المنتج */}
                  <p className="text-gray-600 text-sm line-clamp-2 truncate">
                    {product.description}
                  </p>

                  {/* الفئة */}
                  <div className="flex gap-2 mt-1">
                    <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full w-max">
                      {product.category}
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full w-max">
                      Large
                    </span>
                  </div>

                  {/* السعر الحالي والقديم */}
                  <p className="flex items-center gap-2 mt-1">
                    {/* السعر الحالي */}
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>

                    {/* السعر القديم كـ badge */}
                    <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded-full line-through w-max">
                      ${product.oldPrice}
                    </span>
                  </p>

                  {/* الأزرار */}
                  <div className="flex gap-2 mt-4">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 border rounded hover:bg-gray-200 transition"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded transition ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 border rounded hover:bg-gray-200 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
