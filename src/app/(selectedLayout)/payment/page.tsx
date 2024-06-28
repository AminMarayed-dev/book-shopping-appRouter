"use client"
import { Button } from "@mui/material"




function Payment() {
  return (
    <>
    <Button color="secondary" onClick={() => location.href = "/result/success"}>پرداخت</Button>
    <Button color="secondary" onClick={() => location.href = "/result/fail"}>انصراف</Button>
    </>
  )
}

export default Payment