const downloadImage = async (imgUrl, id) => {
  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = id;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    alert("Something Went Wrong... Unable to Download Image");
  }
};

export default downloadImage;
