function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <img
        src={
          contact.avatar ||
          "https://via.placeholder.com/100"
        }
        alt={contact.name}
        className="avatar"
      />

      <h3>{contact.name}</h3>

      <p className="job">
        {contact.jobTitle} {contact.company && `at ${contact.company}`}
      </p>

      <p>📞 {contact.phone}</p>
      <p>✉️ {contact.email}</p>

      <p className="bio">{contact.bio}</p>
    </div>
  );
}

export default ContactCard;