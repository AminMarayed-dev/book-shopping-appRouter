"use client";
import { useEditUser, useGetUser } from "@/app/(rootLayout)/product/hook";
import ButtonTypeOne from "@/components/button-type-one/ButtonTypeOne";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { Box, Typography } from "@mui/material";
import { getCookie } from "cookies-next";

function Payment() {
  const userId = getCookie("id") as string;
  const { mutate: editUserMutation } = useEditUser();
  const { data: customer } = useGetUser(userId);

  function pay() {
    const finalOrder = getLocalStorage("basket");
    const customerNew: any = {
      ...customer,
      orders: [{ state: false, orderBooks: finalOrder }, ...customer?.orders!],
    };
    editUserMutation(customerNew);
    setLocalStorage("basket", "");
    location.href = "/result/success";
  }
  return (
    <Box sx={{mx:2}}>
    <Typography sx={{textAlign:"center" , py:"70px"}}>
      آیا مطمئن هستی ؟
    </Typography>
      <ButtonTypeOne text="پرداخت" handleClick={pay} />
      <ButtonTypeOne
        text="انصراف"
        handleClick={() => (location.href = "/result/fail")}
      />
    </Box>
  );
}

export default Payment;
