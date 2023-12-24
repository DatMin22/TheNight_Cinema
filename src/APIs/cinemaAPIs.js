import fetcher from "./fetcher"

export const getMovieShowTimesAPIs = async (movieID) => {
    try {
        const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
            params:{
                maPhim: movieID,
            }
        });
      
        return response.data.content
        
    } catch (error) {
        
    }
}