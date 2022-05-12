import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Gk7aic6mN1DvLEwCirf3LEasyS5r1ehxda43Spo1h0E",
  },
});
