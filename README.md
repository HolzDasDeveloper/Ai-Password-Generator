# 🔐 AI-Powered Password Generator

This is a simple web-based password generator that takes a **prompt** like:


...and returns a strong password that includes your keyword (e.g. `tost`) and fills the rest with random characters, numbers, and symbols up to the total length you specify.

---

## 🚀 Features

- ✅ Prompt-based password generation
- ✅ Keyword is always included in the password
- ✅ Customizable password length (6–32 characters)
- ✅ Copy-to-clipboard button
- ✅ Smart character mixing with numbers, symbols, and letters
- ✅ No server required – works entirely in your browser

---

## 💡 How to Use

1. Open `index.html` in any browser.
2. Enter a prompt in this format:


**Examples:**

- `admin, 10`
- `banana, 16`
- `mydog, 12`

3. Click `🚀 Generate` to get your password.
4. Click `📋 Copy` to copy it to your clipboard.

---

## 🧠 Prompt Tips

- Only use a number for the length (e.g. `10`, not `10 characters`)
- The length must be **greater than or equal to the keyword length**, and max **32**
- The keyword will always be part of the result
- The rest is auto-filled with:
  - ✅ Letters (A-Z, a-z)
  - ✅ Numbers (0–9)
  - ✅ Symbols (!§$%&*#)

---


## 🔒 Disclaimer

This generator is for **educational/demo purposes**. For production-level password generation, always use a strong cryptographic method.

---

## 🔧 Made with ❤️ by Hölzchen
