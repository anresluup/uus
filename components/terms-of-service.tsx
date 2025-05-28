import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: May 22, 2025</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using CheatScanner's website and services, you agree to be bound by these Terms of Service. If
          you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <p>
          CheatScanner provides a service that allows users to search for publicly available information on dating
          platforms. Our service is designed to provide factual information while respecting privacy and legal
          boundaries.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <p>As a user of our services, you agree to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide accurate and complete information when using our services.</li>
          <li>Use our services only for lawful purposes and in accordance with these Terms.</li>
          <li>Not use our services to harass, stalk, or harm others.</li>
          <li>
            Not attempt to gain unauthorized access to our systems or interfere with the proper working of our services.
          </li>
          <li>Not use our services for any illegal or unauthorized purpose.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Payment and Refunds</h2>
        <p>
          Some of our services require payment. By making a payment, you agree to pay the specified amount for the
          service. All payments are final and non-refundable unless otherwise required by law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our website, including but not limited to text, graphics, logos,
          and software, are owned by CheatScanner and are protected by copyright, trademark, and other intellectual
          property laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" and "as available" without any warranties of any kind, either express or
          implied. We do not guarantee the accuracy, completeness, or reliability of any results obtained through our
          services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
        <p>
          In no event shall CheatScanner be liable for any indirect, incidental, special, consequential, or punitive
          damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
          resulting from your access to or use of or inability to access or use the services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless CheatScanner and its officers, directors, employees, agents,
          and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees
          (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your
          violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">9. Termination</h2>
        <p>
          We may terminate or suspend your access to our services immediately, without prior notice or liability, for
          any reason whatsoever, including without limitation if you breach these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide
          at least 30 days' notice prior to any new terms taking effect.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
          CheatScanner is established, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:admin@cheater-scanner.info" className="text-red-500 hover:underline">
            admin@cheater-scanner.info
          </a>
        </p>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-red-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
