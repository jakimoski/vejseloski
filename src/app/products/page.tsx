async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data.data;
}

type Product = {
  id: number;
  name: string;
  code: string;
  price_out: string;
  tax_out: string;
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>
              <span className="font-medium">Code:</span> {product.code}
            </p>
            <p>
              <span className="font-medium">Price:</span>{" "}
              {parseFloat(product.price_out).toFixed(2)} ден
            </p>
            <p>
              <span className="font-medium">Tax:</span> {product.tax_out}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
