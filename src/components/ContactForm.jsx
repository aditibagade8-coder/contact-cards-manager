import { useState } from "react";

function ContactForm({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    phone: "",
    email: "",
    bio: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please enter name and email.");
      return;
    }

    addContact(formData);

    setFormData({
      name: "",
      jobTitle: "",
      company: "",
      phone: "",
      email: "",
      bio: "",
      avatar: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Add Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={formData.jobTitle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Short Bio / Description"
        value={formData.bio}
        onChange={handleChange}
      />

      <input
        type="text"
        name="avatar"
        placeholder="Avatar URL (optional)"
        value={formData.avatar}
        onChange={handleChange}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;