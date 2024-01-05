export function googlePhotoParser(url: string) {
  const match = url.match(/\/file\/d\/(.+?)\/view/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
}
