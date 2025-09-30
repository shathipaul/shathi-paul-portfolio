import CommonTitle from "@/components/common/CommonTitle";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 scroll-mt-28">
      <CommonTitle text="Let's get connected" />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
