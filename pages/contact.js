import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact form</title>
        <meta
          name="description"
          content="Please send your contacts for the feedback"
        />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
