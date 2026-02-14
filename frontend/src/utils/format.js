export const formatDate = (value) => {
  if (!value) return "-";

  const d = new Date(value); 
  if (Number.isNaN(d.getTime())) {
    return "-";
  }
  return d.toLocaleDateString(); 
};

export const formatDateTime = (value) => {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) {
    return "-";
  }
  return d.toLocaleString();
};