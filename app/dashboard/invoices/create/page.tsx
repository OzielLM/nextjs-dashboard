import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Create Invoice'
}

export const dynamic = 'force-dynamic';

async function InvoiceForm() {
  const customers = await fetchCustomers();
  return <Form customers={customers} />;
}

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/inoices/create',
            active: true,
          },
        ]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <InvoiceForm />
      </Suspense>
    </main>
  )
}
