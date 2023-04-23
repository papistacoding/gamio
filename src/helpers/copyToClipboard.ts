export const copyToClipboard = (str: any) => {
  navigator.clipboard
    .writeText(str)
    .catch((err) => console.error("Failed to copy to clipboard:", err));
};
