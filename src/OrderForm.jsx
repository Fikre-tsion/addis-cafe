import { useState } from "react";

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", area: "" });

  // Validation: Checks if the phone number starts with 09 or 07 and is exactly 10 digits
  const isValidTeleBirr = /^(09|07)\d{8}$/.test(form.phone);
  const isFormValid = form.name.trim() !== "" && form.area.trim() !== "" && isValidTeleBirr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="order-form" onSubmit={(e) => e.preventDefault()}>
      <h3>TeleBirr Delivery Details</h3>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="TeleBirr Number (e.g., 09...)"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="area"
        placeholder="Delivery Area"
        value={form.area}
        onChange={handleChange}
      />
      <button disabled={!isFormValid}>Complete Order</button>
    </form>
  );
}