
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md border border-gray-200">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Disclaimer
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Important information about using Ecommy.
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              1. General Information
            </h2>
            <p>
              All information provided on Ecommy is for general
              informational and shopping purposes. We make reasonable
              efforts to keep the information accurate and up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              2. Product Information
            </h2>
            <p>
              Product descriptions, images, prices, and availability are
              provided for informational purposes. Actual product appearance
              may vary slightly due to photography, display settings, or
              manufacturer changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              3. Pricing and Availability
            </h2>
            <p>
              Product prices and availability may change without prior
              notice. Ecommy reserves the right to correct pricing errors
              and update product information when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              4. External Links
            </h2>
            <p>
              Our website may contain links to external websites. Ecommy
              does not control or take responsibility for the content,
              policies, or practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              Ecommy shall not be held responsible for indirect or
              consequential losses arising from the use of this website,
              to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              6. Changes to This Disclaimer
            </h2>
            <p>
              We reserve the right to update or modify this disclaimer
              at any time. Changes will become effective once published
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions regarding this disclaimer,
              please contact our support team.
            </p>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Thank you for visiting Ecommy!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Disclaimer;
