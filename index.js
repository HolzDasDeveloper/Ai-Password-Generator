const readline = require('readline-sync');

function generatePassword(prompt) {
  const parts = prompt.split(",");
  if (parts.length < 2) return "❌ Bitte im Format 'keyword, länge' eingeben.";

  const keyword = parts[0].trim();
  const length = parseInt(parts[1].trim());

  if (isNaN(length) || length < keyword.length) {
    return "❌ Ungültige Länge.";
  }

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!§$%&*#";
  let result = keyword;
  while (result.length < length) {
    const randChar = chars[Math.floor(Math.random() * chars.length)];
    result += randChar;
  }

  // Shuffle
  result = result.split('').sort(() => Math.random() - 0.5).join('');
  return result;
}

// Prompt-Loop
while (true) {
  const input = readline.question("➡️  Prompt eingeben (z. B. 'tost, 10') oder 'exit': ");
  if (input.toLowerCase() === "exit") break;

  const password = generatePassword(input);
  console.log("🔐 Generiertes Passwort:", password);
}
