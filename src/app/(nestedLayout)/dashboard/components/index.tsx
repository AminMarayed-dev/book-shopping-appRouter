"use client";
import React, { useState, ChangeEvent } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Container,
  Typography,
  Box,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import logo from "../../../../../public/redlogo.svg";
import { Logout, Home } from "@mui/icons-material";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendBooks } from "@/service";
import { BooksEntity } from "@/type";
import TableDashboard from "@/app/(nestedLayout)/dashboard/components/table-dashboard/TableDashboard";
import FormDashboard from "@/app/(nestedLayout)/dashboard/components/form-dashboard/FormDashboard";
import {
  useDeleteBook,
  useEditBook,
} from "@/app/(nestedLayout)/dashboard/hook";
import { useGetAllBooks } from "@/hooks/useGetAllBooks";
import TableInventory from "./table-inventory/TableInventory";

const myLogo: StaticImageData = logo;

const Dashboard: React.FC = () => {
  const [newBook, setNewBook] = useState<any>({
    id: Date.now().toString(),
    name: "",
    writer: "",
    price: 0,
    genre: "",
    ageGroup: "",
    isbn: 0,
    imageUrl: [],
    description: "",
    quantity: 0,
  });
  const [page, setPage] = useState(0);
  const [editingBook, setEditingBook] = useState<BooksEntity | null>(null);
  const { data: books } = useGetAllBooks();
  const [currentView, setCurrentView] = useState("storeForm");

  const queryClient = useQueryClient();

  // Add
  const { mutate: handleSaveBook } = useMutation({
    mutationKey: ["sendbookskey"],
    mutationFn: sendBooks,
    onSuccess: () => {
      Swal.fire({
        title: " موفق!",
        text: "کتاب با موفقیت افزوده شد",
        icon: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["AllBook"] });
      setNewBook({
        id: Date.now().toString(),
        name: "",
        writer: "",
        price: 0,
        genre: "",
        ageGroup: "",
        isbn: 0,
        imageUrl: [],
        description: "",
        quantity: 0,
      });
      setCurrentView("table");
    },
    onError: () => {
      Swal.fire({
        title: "خطا!",
        text: "مشکلی پیش آمده!!!",
        icon: "error",
      });
    },
  });

  // Delete
  const { handleDelete: handleDeleteClick } = useDeleteBook();

  // Edit
  const { handleEditBook } = useEditBook({
    newBook,
    setNewBook,
    setCurrentView,
    setEditingBook,
  });

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const updatedImageUrls = [...newBook.imageUrl!];
        updatedImageUrls[index] = base64String;
        setNewBook({
          ...newBook,
          imageUrl: updatedImageUrls,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
  };

  const handleEditClick = (book: BooksEntity) => {
    setEditingBook(book);
    setNewBook(book);
    setCurrentView("form");
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
    setNewBook({
      id: Date.now().toString(),
      name: "",
      writer: "",
      price: 0,
      genre: "",
      ageGroup: "",
      isbn: 0,
      imageUrl: [],
      description: "",
      quantity: 0,
    });
    setCurrentView("table");
  };

  const confirmDelete = (id: any) => {
    Swal.fire({
      title: "آیا از حذف این کتاب مطمئن هستید؟",
      text: "عملیات غیرقابل بازگشت خواهد بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف کتاب",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteClick(id);
      }
    });
  };

  return (
    <Box sx={{ bgcolor: "secondary.dark" }}>
      <Box
        sx={{
          backgroundColor: "secondary.dark",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#db3249",
        }}
      >
        <Box display="flex" alignItems="center" m={2}>
          <Image src={myLogo} alt="logo" width={50} />
          <Typography>دَشبورد</Typography>
        </Box>
        <Box ml={3}>
          <IconButton aria-label="logout" onClick={() => (location.href = "/")}>
            <Home style={{ color: "#db3249" }} />
          </IconButton>
          <IconButton
            aria-label="logout"
            onClick={() => (location.href = "/register")}
          >
            <Logout style={{ color: "#db3249" }} />
          </IconButton>
        </Box>
      </Box>
      <Container>
        <Typography variant="h6" color="white" my={2}>
          لیست کتاب های موجود در سایت
        </Typography>
      </Container>

      <Container>
        <Tabs
          value={currentView}
          onChange={(e, newValue) => {
            setCurrentView(newValue);
            console.log(newValue, e);
          }}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="table" label="جدول کتاب ها" />
          <Tab
            value="form"
            label={editingBook ? "ویرایش کتاب" : "افزودن کتاب جدید"}
          />
          <Tab value="storeForm" label="جدول موجودی/قیمت" />
        </Tabs>

        <TableDashboard
          currentView={currentView}
          books={books}
          page={page}
          confirmDelete={(id: string) => confirmDelete(id)}
          handleEditClick={handleEditClick}
          handleChangePage={handleChangePage}
        />

        <FormDashboard
          currentView={currentView}
          editingBook={editingBook}
          newBook={newBook}
          setNewBook={setNewBook}
          handleFileUpload={handleFileUpload}
          handleEditBook={handleEditBook}
          handleSaveBook={handleSaveBook}
          handleCancelEdit={handleCancelEdit}
        />
        <TableInventory
          currentView={currentView}
          books={books}
          page={page}
          handleChangePage={handleChangePage}
        />
      </Container>
    </Box>
  );
};

export default Dashboard;
