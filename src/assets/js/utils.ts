export const getFriendlyUrl = (string: string, separator = '_') => {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/-,:;&';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz_______';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, separator) // Replace spaces with _
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/[^\w-]+/g, '_'); // Replace non-word characters with _
};
