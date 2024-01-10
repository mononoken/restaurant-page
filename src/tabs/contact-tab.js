export const contactTabHTML = `
  <form action="" method="get">
    <div class="form-inputs">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Inigo"
          required
        />
      </div>
      <div>
        <label for="email">EMAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="i.montoya@protonmail.com"
          required
        />
      </div>
      <div>
        <label for="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Write your message here"
          required
        />
      </div>
    <div class="form-submit">
      <button type="submit">Submit</button>
    </div>
  </form>
`;
