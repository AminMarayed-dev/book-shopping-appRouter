import { deleteBook, editBook } from "@/service";
import { BooksEntity } from "@/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


export const useEditBook = ({
  newBook,
  setNewBook,
  setCurrentView,
  setEditingBook,
}: {
  setNewBook: (book: BooksEntity) => void;
  setCurrentView: (tuba: string) => void;
  setEditingBook: (book: BooksEntity | null) => void;
  newBook: BooksEntity;
}) => {
  const queryClient = useQueryClient();

  const { mutate: handleEditBook } = useMutation({
    mutationKey: ["editBookskey"],
    mutationFn: () => editBook(newBook),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AllBook"] });
      Swal.fire({
        title: "موفق!",
        text: "کتاب با موفقیت ویرایش شد",
        icon: "success",
      });
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
      });
      setEditingBook(null);
      setCurrentView("table");
    },
    onError: (res) => {
      console.log("first");
      console.log(res);
      Swal.fire({
        title: "خطا!",
        text: "مشکلی پیش آمده!!!",
        icon: "error",
      });
    },
  });

  return { handleEditBook };
};




export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["deleteBookskey"],
    mutationFn: (id) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AllBook"] });
      Swal.fire({
        title: "حذف!",
        text: "کتاب با موفقیت حذف شد",
        icon: "success",
      });
    },
    onError: (res) => {
      Swal.fire({
        title: "خطا!",
        text: "مشکلی پیش آمده!!!",
        icon: "error",
      });
    },
  });

  const handleDelete = (id) => {
    mutate(id);
  };

  return { handleDelete };
};
