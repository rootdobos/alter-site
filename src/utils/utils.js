export const slugify = (str) => {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "") // replace spaces with hyphens
    .replace(/-+/g, ""); // remove consecutive hyphens
};

export const getItemBySlug = (dict, slug) => {

  let result = dict;
  if (Object.keys(dict).length === 0) return [];
  if(slug===undefined)return result
  const slugParts = slug.split("-");
  slugParts.forEach((sp) => {
    result = result.filter((data) => slugify(data.title) === sp)[0];
    if (result.data) {
      result = result.data;
    } else {
      result = result.images;
    }
  });
  return result;
};
