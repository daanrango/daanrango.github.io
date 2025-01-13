const loadData = async (parametro: string) => {
  try {
    const response = await fetch("/data/database.json");
    const data = await response.json();
    return data[parametro];
  } catch (error) {
    console.error("Error fetching texts:", error);
    return null;
  }
};

export default loadData;
