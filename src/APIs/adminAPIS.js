import fetcher from "./fetcher";

// Add Movie
export const addMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      payload
    );
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};

export const deleteMovie = async (movieID) => {
  try {
    const response = await fetcher.post(movieID);
    //return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};
