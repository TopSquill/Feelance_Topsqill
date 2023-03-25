import React, { useEffect } from "react";
import BannerSection from "../components/BannerSection";
import Category from "../components/Category";
import BannerSecond from "../components/BannerSecond";
import UserSection from "../components/UserSection";
import { useSearchParams } from "react-router-dom";
import { axiosClient } from "../utills/axiosClient";
import Swal from 'sweetalert2';
import { KEY_ACCESS_TOKEN, setItem } from "../utills/localStorageManeger";

const resendVerificationAlert = () => {
  return Swal.fire({
    title: 'Resend verification link',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
      placeholder: 'Enter your email'
    },
    showCancelButton: true,
    confirmButtonText: 'Resend',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return axiosClient.post(`/users/verify-email/resend`, {
        email
      }).then(response => {
        return response;
      })
      .catch(error => {
        Swal.showValidationMessage(
          `Request failed: ${error.response?.data?.message || error.message}`
        )
      })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    console.log('result', result);
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Verification mail sent',
        icon: 'success'
      })
    }
  });
}

const Home = () => {
  const [queryParams] = useSearchParams();

  useEffect(() => {
    const verifyToken = queryParams.get('verify');

    if (verifyToken) {
      axiosClient.post(`/users/verify-email/${verifyToken}`).then(({ data }) => {
        setItem(KEY_ACCESS_TOKEN, data.token);
        Swal.fire({
          title: 'Verification successful!',
          icon: 'success'
        }).then(() => {
          window.location.replace("/", "_self");
        })
      }).catch((error) => {
        console.log('error', error.response)
        Swal.fire({
          icon: 'error',
          title: error.response?.data?.message || error.message || 'Something went wrong!',
        }).then(() => {
            if (error.response?.status != 405) {
            resendVerificationAlert()
          }
        }) 
      });
    }
  }, [queryParams]);

  return (
    <>
      <BannerSection />
      <Category />
      <BannerSecond />
    </>
  );
};

export default Home;
