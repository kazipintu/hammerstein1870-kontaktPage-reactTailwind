const EmbededMap = () => {
  return (
      <iframe className="w-full h-full p-1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.8603069282749!2d8.473120661320813!3d47.18837584512236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900090955c2f9b%3A0x584847ae513d0c41!2sGewerbestrasse%205%2C%206330%20Cham%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1728475083528!5m2!1sen!2sin"
        style={{ border: 2 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default EmbededMap;