import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDateRange, MdEdit, MdLocationOn, MdLogout, MdPhone, MdProductionQuantityLimits, MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { backend_url, server } from "../../server";
import Loader from "../Layout/Loader";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});
  const { products } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [dispatch, id]);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc +
        product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full bg-white shadow-sm p-4 rounded-md">
          <div className="flex flex-col items-center border-b pb-4 mb-4">
            <img
              src={`${backend_url}${data.avatar}`}
              alt=""
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
            <h3 className="text-2xl font-semibold mt-2">{data.name}</h3>
            <p className="text-lg text-gray-500">{data.description}</p>
          </div>

          <InfoItem icon={<MdLocationOn />} title="Address" content={data.address} />
          <InfoItem icon={<MdPhone />} title="Phone Number" content={data.phoneNumber} />
          <InfoItem icon={<MdProductionQuantityLimits />} title="Total Products" content={products && products.length} />
          <InfoItem icon={<MdStarRate />} title="Shop Ratings" content={`${averageRating.toFixed(1)}/5`} />
          <InfoItem icon={<MdDateRange />} title="Joined On" content={data?.createdAt?.slice(0, 10)} />

          {isOwner && (
            <div className="flex flex-col space-y-3 mt-4">
              <Link to="/settings">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center w-full">
                  <MdEdit className="mr-2" /> Edit Shop
                </button>
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center w-full"
                onClick={logoutHandler}
              >
                <MdLogout className="mr-2" /> Log Out
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const InfoItem = ({ icon, title, content }) => (
  <div className="flex items-center py-2 border-b">
    <div className="text-xl text-blue-500 mr-4">{icon}</div>
    <div>
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ShopInfo;
