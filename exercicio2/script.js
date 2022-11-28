const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaStringNew = minhaString.trim()

console.log(minhaString.length, minhaStringNew.length)

console.log(minhaStringNew.replace(`________`, `sticioso`))