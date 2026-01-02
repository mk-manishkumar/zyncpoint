export const smoothScrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
};
