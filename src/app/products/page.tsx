"use client";

import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { Product } from "@/types/types";


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState(""); // raw input
  const [search, setSearch] = useState(""); // debounced value
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/products?page=${page}&search=${encodeURIComponent(search)}`
      );
      const data = await res.json();
      setProducts(data.data);
      setLoading(false);
    };

    fetchProducts();
  }, [page, search]);

  // Debounce the actual search value
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setPage(1); // reset to first page
        setSearch(value);
      }, 300), // debounce delay in ms
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    debouncedSearch(value);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📦 Products</h1>

      <input
        type="text"
        placeholder="Search by name or code..."
        value={searchInput}
        onChange={handleSearchChange}
        className="w-full md:w-1/2 p-2 mb-6 border rounded-md"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <h2 className="text-xl font-semibold">{product.name}</h2>

                  <p>
                    <span className="font-medium">Цена:</span>{" "}
                    {parseFloat(product.price_out).toFixed(2)} ден
                  </p>
                  <p>
                    <span className="font-medium">ДДВ:</span> {product.tax_out}%
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              ⬅ Предходна
            </button>
            <span className="self-center font-semibold">Страница {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={products.length < 100}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Следна ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}
