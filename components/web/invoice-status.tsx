import { Invoice } from "@/lib/definitions";
import { invoices } from "@/lib/placeholder-data";
import { clsx } from "cn";

export function InvoiceStatus({ status }: { status: string }) {
  return (
    <div>
      {invoices.map((statu) => {
        return <p key={statu.id}>{statu.status}</p>;
      })}

      <h2
        className={clsx(
          "inline-flex items-center rounded-xl px-2 py-1 text-sm",
          {
            "bg-gray-100 text-gray-500": status === "pendente",
            "bg-green-500 text-white": status === "pago",
          },
        )}
      >
        {status}
      </h2>
    </div>
  );
}
