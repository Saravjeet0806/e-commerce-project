
import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-200">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Return & Refund Policy
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Your satisfaction is important to us at Ecommy.
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              1. Return Eligibility
            </h2>
            <p>
              Customers may request a return for eligible products if they
              are damaged, defective, or incorrect. Products should be
              returned in their original condition and packaging.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              2. Return Period
            </h2>
            <p>
              Return requests should be submitted within 7 days of receiving
              the product. Requests submitted after this period may not be
              accepted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              3. Refund Process
            </h2>
            <p>
              Once the returned product is received and inspected, eligible
              refunds will be processed using the original payment method.
              Processing time may vary depending on the payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              4. Non-Returnable Items
            </h2>
            <p>
              Certain products may not be eligible for return due to their
              nature, condition, or applicable restrictions. Such conditions
              will be communicated where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              5. Damaged or Incorrect Products
            </h2>
            <p>
              If you receive a damaged, defective, or incorrect product,
              please contact our support team with your order details and
              relevant photographs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              6. Contact Us
            </h2>
            <p>
              For questions regarding returns and refunds, please contact
              our customer support team.
            </p>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Thank you for shopping with Ecommy!
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;
