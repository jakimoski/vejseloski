"use client";

import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { Product } from "@/types/types";
import Loading from "@/components/Loading";
import image1 from "@/app/assets/aluminium/aluminum-1.webp";
import image2 from "@/app/assets/aluminium/aluminum-2.webp";
import image3 from "@/app/assets/aluminium/aluminum-6.webp";
import Image from "next/image";

const images = [image1, image2, image3];

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
    <section className="p-6">
      <div>
        <h1 className="text-4xl text-center font-bold my-4 md:my-20">
          📦 Продукти
        </h1>
        <div
          className="relative grid w-full mt-16 gap-12 px-4 md:px-14 md:py-6 py-4 text-white
                           grid-cols-1 md:grid-cols-3"
        >
          {images &&
            images?.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Aluminium ${index + 1}`}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
        </div>
        <div className="text-center mb-8 m-auto">
          <h3 className="max-w-5xl text-center m-auto text-lg ">
            Алуминиумски профили за прозорци, врати, фасади и огради.
          </h3>
          <h3 className="max-w-5xl m-auto text-lg ">
            Механизми и хардвер: ментеши, кваките, брави.
          </h3>
          <p className="max-w-5xl m-auto text-lg ">
            Додатоци за монтажери и занаетчии.
          </p>

          <p className="max-w-5xl m-auto text-lg ">
            Зошто да одберете Железара Вејселоски? Висококвалитетни производи по
            европски стандарди. Соработка со докажани брендови како AKPA –
            Турција. Конкурентни цени и залиха на производи. Стручна и
            пријателска услуга. Контактирајте нè за понуда, консултација или
            соработка.
          </p>
          <p className="max-w-5xl m-auto font-bold text-lg ">
            Железара Вејселоски – каде квалитетот и довербата се основа на
            секоја успешна зделка.
          </p>
        </div>
      </div>
      <h1 className="text-4xl text-center font-bold my-4 md:my-20">
        📦 Сите Продукти
      </h1>

      <input
        type="text"
        placeholder="Барај..."
        value={searchInput}
        onChange={handleSearchChange}
        className="w-full m-auto block md:w-1/2 p-2 mb-6 md:mb-12 border rounded-md"
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          {products?.length === 0 || !products ? (
            <p className="text-2xl text-center p-6">
              Не се пронајдени производи.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products?.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold">{product.name}</h3>

                  <p>
                    <span className="font-medium">Цена:</span>{" "}
                    {parseFloat(product?.price_out).toFixed(2)} ден
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
            <span className="self-center font-semibold">Странa {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={products?.length < 100}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Следна ➡
            </button>
          </div>
        </>
      )}
    </section>
  );
}
