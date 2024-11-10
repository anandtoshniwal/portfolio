
export const generateSlug = (title: string) => {
    return title
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, ''); // Remove leading or trailing hyphens
  };