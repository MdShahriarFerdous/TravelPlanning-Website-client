import React from "react";
import HotelCard from "./HotelCard";
import "./HotelPage.css";
import axios from "axios";
import { toast } from "react-toastify";

const HotelsPage = () => {
  const handleBookmarkToggle = async (hotelId, bookmarked) => {
    const authToken = localStorage.getItem("auth");
    const Authorization = JSON.parse(authToken).createToken;

    if (!bookmarked) {
      axios
        .delete(
          `${import.meta.env.VITE_API}/remove-hotel-bookmark/${hotelId}`,
          {
            headers: {
              Authorization,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success("Bookmark removed");
        })
        .catch((error) => {
          if (error.response.data.error === "Token expired") {
            toast.error("token expired, please login again");
          } else {
            toast.error(error?.response?.data?.error);
          }
        });
    } else {
      axios
        .post(
          `${import.meta.env.VITE_API}/add-hotel-bookmark/${hotelId}`,
          {},
          {
            headers: {
              Authorization,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          toast.success("Bookmark added");
        })
        .catch((error) => {
          if (error.response.data.error === "Token expired") {
            toast.error("token expired, please login");
          } else {
            toast.error(error?.response?.data?.error);
          }
        });
    }
  };

  const hotels = [
    {
      id: "5fcda8b5a92b3b7f8567351a",
      name: "Taj Hotel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/29/2e/73/f3/celsius-the-pool.jpg",
    },
    {
      id: "5fcda8b5a92b3b7f8567351b",
      name: "Platinum Grand",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/28/dd/82/5d/sunway-putra-hotel.jpg",
    },
    {
      id: "5fcda8b5a92b3b7f8567351c",
      name: "The Lalit",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/23/b5/5f/31/facade.jpg",
    },
    {
      id: "5fcda8b5a92b3b7f8567351d",
      name: "Six Seasons Hotel",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/21/e4/dc/six-seasons-hotel.jpg",
    },
    {
      id: "5fcda8b5a92b3b7f8567351e",
      name: "The Palace Luxury Resort",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/24/79/bf/35/tower-building.jpg",
    },
    {
      id: "5fcda8b5a92b3b7f8567351f",
      name: "Hotel Sarina Dhaka",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/29/b2/b0/0e/hotel-exterior.jpg",
    },
  ];

  return (
    <div className="hotels-page">
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            handleBookmarkToggle={handleBookmarkToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
