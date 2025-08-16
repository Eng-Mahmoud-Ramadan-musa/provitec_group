"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../context/slices/cartSlice";
import { ProductResponse } from "../../types/product/response";

interface ProductCardProps {
  product: ProductResponse;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        title: product.title,
        price: product.finalPrice,
        quantity: 1,
        image: product.images?.[0]?.secure_url || "/placeholder.jpg",
        stock: product.stock,
      })
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <Link href={`/products/${product.slug}`} className="block aspect-square overflow-hidden">
        <Image
          src={product.images?.[0]?.secure_url || "/placeholder.jpg"}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {product.discount > 0 && (
        <div className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          {product.discountType === "percentage"
            ? `${product.discount}% OFF`
            : `$${product.discount} OFF`}
        </div>
      )}

      <div className="p-4">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-gray-100">
            {product.title}
          </h3>
        </Link>

        <div className="mb-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.round(product.averageRating) ? "text-background" : "text-gray-300 dark:text-gray-600"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
              ({product.ratings?.length || 0})
            </span>
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <div>
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${product.finalPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400 dark:focus:ring-offset-gray-900"
        >
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}