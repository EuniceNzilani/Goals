import React from "react";

export function Card({ children, className }) {
  return <div className={`bg-white rounded-lg p-4 shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`border-b pb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
