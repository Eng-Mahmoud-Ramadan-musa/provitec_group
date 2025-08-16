"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../context/slices/productSlice";
import { RootState } from "../../context/store";
import { ProductFilterRequest } from "../../types/product/request";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  filters?: ProductFilterRequest;
}

export default function ProductGrid({ filters = {} }: ProductGridProps) {
  const dispatch = useDispatch();
  const { products, loading, error, totalProducts, currentPage, totalPages } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters]);

  if (loading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-900/10 dark:text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-lg bg-yellow-50 p-4 text-yellow-800 dark:bg-yellow-900/10 dark:text-background">
        <p>No products found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() =>
                dispatch(
                  fetchProducts({ ...filters, page: Math.max(1, currentPage - 1) })
                )
              }
              disabled={currentPage === 1}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Previous
            </button>

            <span className="text-sm text-gray-700 dark:text-gray-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                dispatch(
                  fetchProducts({ ...filters, page: Math.min(totalPages, currentPage + 1) })
                )
              }
              disabled={currentPage === totalPages}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}