import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="mb-4">Last updated: May 22, 2025</p>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to CheatScanner ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you
          have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Information you provide to us directly, such as when you create an account, use our services, or contact us.
          </li>
          <li>
            Information we collect automatically when you use our services, such as your IP address, browser type, and
            device information.
          </li>
          <li>Information from third-party sources, such as publicly available databases.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide, maintain, and improve our services.</li>
          <li>To process transactions and send related information.</li>
          <li>To send administrative information, such as updates, security alerts, and support messages.</li>
          <li>To respond to your comments, questions, and requests.</li>
          <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
          <li>To detect, prevent, and address technical issues.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
        <p>We may share your information in the following situations:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>With service providers who perform services on our behalf.</li>
          <li>To comply with applicable laws, regulations, or legal processes.</li>
          <li>To protect the rights, property, and safety of CheatScanner, our users, or others.</li>
          <li>
            In connection with, or during negotiations of, any merger, sale of company assets, financing, or
            acquisition.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Choices</h2>
        <p>You have certain choices regarding the information we collect and how it is used:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You can update or correct your account information at any time.</li>
          <li>You can opt out of receiving promotional emails by following the instructions in those emails.</li>
          <li>
            You can choose not to provide certain information, although this may limit your ability to use certain
            features of our services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal
          information. However, please be aware that no method of transmission over the Internet or method of electronic
          storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
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
