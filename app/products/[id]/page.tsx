"use client";
import { useParams } from "next/navigation";

export default function ProductPage() {
  // useParams sólo funciona en componentes cliente.
  const params = useParams();
  // params puede devolver string | string[] | undefined, manejamos el caso seguro
  const rawId = params?.id as string | string[] | undefined;
  const id = Array.isArray(rawId) ? rawId[0] : rawId ?? "";

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Producto #{id}</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Detalles del Producto</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Precio:</strong> $99.99</p>
        <p><strong>Descripción:</strong> Producto de alta calidad</p>
      </div>
    </div>
  );
}
